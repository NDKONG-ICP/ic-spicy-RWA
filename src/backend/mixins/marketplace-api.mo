import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Common "../types/common";
import MarketTypes "../types/marketplace";
import PlantTypes "../types/plants";
import MembershipTypes "../types/membership";
import ClaimTypes "../types/claim";
import MarketLib "../lib/marketplace";

mixin (
  accessControlState : AccessControl.AccessControlState,
  products : Map.Map<Common.ProductId, MarketTypes.Product>,
  orders : Map.Map<Common.OrderId, MarketTypes.Order>,
  plants : Map.Map<Common.PlantId, PlantTypes.Plant>,
  memberships : Map.Map<Principal, MembershipTypes.MembershipNFT>,
  claimTokens : Map.Map<Common.ClaimTokenId, ClaimTypes.ClaimToken>,
  nextProductId : { var value : Nat },
  nextOrderId : { var value : Nat },
) {
  // Admin: create a product listing
  public shared ({ caller }) func createProduct(input : MarketTypes.CreateProductInput) : async MarketTypes.ProductPublic {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    let product = MarketLib.createProduct(products, nextProductId.value, input);
    nextProductId.value += 1;
    MarketLib.toPublicProduct(product);
  };

  // Admin: update a product listing
  public shared ({ caller }) func updateProduct(input : MarketTypes.UpdateProductInput) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    MarketLib.updateProduct(products, input);
  };

  // Admin: delete (deactivate) a product
  public shared ({ caller }) func deleteProduct(product_id : Common.ProductId) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    MarketLib.deleteProduct(products, product_id);
  };

  // Admin: create an order on behalf of buyer (e.g. local pickup)
  public shared ({ caller }) func createOrder(buyer : Principal, input : MarketTypes.CreateOrderInput) : async MarketTypes.OrderPublic {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    let order = MarketLib.createOrder(orders, plants, memberships, claimTokens, nextOrderId.value, buyer, input);
    nextOrderId.value += 1;
    MarketLib.toPublicOrder(order);
  };

  // Admin: update order status
  public shared ({ caller }) func updateOrderStatus(order_id : Common.OrderId, status : MarketTypes.OrderStatus) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin only");
    };
    MarketLib.updateOrderStatus(orders, order_id, status);
  };

  // Public: fetch a product
  public query func getProduct(product_id : Common.ProductId) : async ?MarketTypes.ProductPublic {
    MarketLib.getProduct(products, product_id);
  };

  // Public: list all active products
  public query func listProducts() : async [MarketTypes.ProductPublic] {
    MarketLib.listProducts(products);
  };

  // Public: list products by category
  public query func listProductsByCategory(category : MarketTypes.ProductCategory) : async [MarketTypes.ProductPublic] {
    MarketLib.listProductsByCategory(products, category);
  };

  // Authenticated: fetch an order (buyer or admin)
  public query ({ caller }) func getOrder(order_id : Common.OrderId) : async ?MarketTypes.OrderPublic {
    switch (MarketLib.getOrder(orders, order_id)) {
      case (?o) {
        if (o.buyer == caller or AccessControl.isAdmin(accessControlState, caller)) {
          ?o;
        } else {
          Runtime.trap("Unauthorized: Can only view your own orders");
        };
      };
      case null { null };
    };
  };

  // Authenticated: list all orders for the calling buyer
  public query ({ caller }) func listOrdersByBuyer() : async [MarketTypes.OrderPublic] {
    MarketLib.listOrdersByBuyer(orders, caller);
  };

  // Authenticated: buyer places their own order
  public shared ({ caller }) func placeOrder(input : MarketTypes.CreateOrderInput) : async MarketTypes.OrderPublic {
    if (not AccessControl.hasPermission(accessControlState, caller, #user)) {
      Runtime.trap("Unauthorized: Must be logged in to place orders");
    };
    let order = MarketLib.createOrder(orders, plants, memberships, claimTokens, nextOrderId.value, caller, input);
    nextOrderId.value += 1;
    MarketLib.toPublicOrder(order);
  };
};
