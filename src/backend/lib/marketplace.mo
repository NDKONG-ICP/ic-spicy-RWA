import Common "../types/common";
import Types "../types/marketplace";
import PlantTypes "../types/plants";
import MembershipTypes "../types/membership";
import ClaimTypes "../types/claim";
import ClaimLib "claim";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

module {
  public func createProduct(
    products : Map.Map<Common.ProductId, Types.Product>,
    nextId : Nat,
    input : Types.CreateProductInput,
  ) : Types.Product {
    let product : Types.Product = {
      id = nextId;
      var name = input.name;
      var description = input.description;
      var price_cents = input.price_cents;
      category = input.category;
      inventory_category = input.inventory_category;
      variety = input.variety;
      var active = true;
      var image_key = input.image_key;
      var plant_id = input.plant_id;
    };
    products.add(nextId, product);
    product;
  };

  public func updateProduct(
    products : Map.Map<Common.ProductId, Types.Product>,
    input : Types.UpdateProductInput,
  ) : () {
    switch (products.get(input.product_id)) {
      case (?product) {
        switch (input.name) {
          case (?n) { product.name := n };
          case null {};
        };
        switch (input.description) {
          case (?d) { product.description := d };
          case null {};
        };
        switch (input.price_cents) {
          case (?p) { product.price_cents := p };
          case null {};
        };
        switch (input.active) {
          case (?a) { product.active := a };
          case null {};
        };
        switch (input.image_key) {
          case (?k) { product.image_key := ?k };
          case null {};
        };
      };
      case null { Runtime.trap("Product not found") };
    };
  };

  public func deleteProduct(
    products : Map.Map<Common.ProductId, Types.Product>,
    product_id : Common.ProductId,
  ) : () {
    switch (products.get(product_id)) {
      case (?product) { product.active := false };
      case null { Runtime.trap("Product not found") };
    };
  };

  public func createOrder(
    orders : Map.Map<Common.OrderId, Types.Order>,
    plants : Map.Map<Common.PlantId, PlantTypes.Plant>,
    memberships : Map.Map<Principal, MembershipTypes.MembershipNFT>,
    claimTokens : Map.Map<Common.ClaimTokenId, ClaimTypes.ClaimToken>,
    nextId : Nat,
    buyer : Principal,
    input : Types.CreateOrderInput,
  ) : Types.Order {
    // Calculate subtotal from items
    let subtotal = input.items.foldLeft(
      0,
      func(acc, item) = acc + item.price_cents * item.quantity,
    );
    // Determine best discount: check claim-based NFT rarity tiers (10/12/15%)
    // and fall back to flat membership discount if present.
    let claimDiscount = ClaimLib.getBestRarityDiscount(claimTokens, buyer);
    let membershipDiscount : Nat = if (memberships.containsKey(buyer)) 10 else 0;
    let discountPct = if (claimDiscount > membershipDiscount) claimDiscount else membershipDiscount;
    let total_cents = if (discountPct > 0) {
      subtotal - subtotal * discountPct / 100;
    } else {
      subtotal;
    };
    // Mark any plant NFT items as sold
    for (item in input.items.values()) {
      switch (item.plant_id) {
        case (?pid) {
          switch (plants.get(pid)) {
            case (?plant) {
              plant.sold := true;
              plant.sold_to := ?buyer;
            };
            case null {};
          };
        };
        case null {};
      };
    };
    let order : Types.Order = {
      id = nextId;
      buyer = buyer;
      items = input.items;
      total_cents = total_cents;
      shipping_address = input.shipping_address;
      pickup = input.pickup;
      var status = #Pending;
      created_at = Time.now();
    };
    orders.add(nextId, order);
    order;
  };

  public func updateOrderStatus(
    orders : Map.Map<Common.OrderId, Types.Order>,
    order_id : Common.OrderId,
    status : Types.OrderStatus,
  ) : () {
    switch (orders.get(order_id)) {
      case (?order) { order.status := status };
      case null { Runtime.trap("Order not found") };
    };
  };

  public func getProduct(
    products : Map.Map<Common.ProductId, Types.Product>,
    product_id : Common.ProductId,
  ) : ?Types.ProductPublic {
    switch (products.get(product_id)) {
      case (?p) { ?toPublicProduct(p) };
      case null { null };
    };
  };

  public func listProducts(
    products : Map.Map<Common.ProductId, Types.Product>,
  ) : [Types.ProductPublic] {
    products.values()
      .filter(func(p : Types.Product) : Bool { p.active })
      .map(toPublicProduct)
      .toArray();
  };

  public func listProductsByCategory(
    products : Map.Map<Common.ProductId, Types.Product>,
    category : Types.ProductCategory,
  ) : [Types.ProductPublic] {
    products.values()
      .filter(func(p : Types.Product) : Bool { p.active and p.category == category })
      .map(toPublicProduct)
      .toArray();
  };

  public func getOrder(
    orders : Map.Map<Common.OrderId, Types.Order>,
    order_id : Common.OrderId,
  ) : ?Types.OrderPublic {
    switch (orders.get(order_id)) {
      case (?o) { ?toPublicOrder(o) };
      case null { null };
    };
  };

  public func listOrdersByBuyer(
    orders : Map.Map<Common.OrderId, Types.Order>,
    buyer : Principal,
  ) : [Types.OrderPublic] {
    orders.values()
      .filter(func(o : Types.Order) : Bool { o.buyer == buyer })
      .map(toPublicOrder)
      .toArray();
  };

  public func toPublicProduct(p : Types.Product) : Types.ProductPublic {
    {
      id = p.id;
      name = p.name;
      description = p.description;
      price_cents = p.price_cents;
      category = p.category;
      inventory_category = p.inventory_category;
      variety = p.variety;
      active = p.active;
      image_key = p.image_key;
      plant_id = p.plant_id;
    };
  };

  public func toPublicOrder(o : Types.Order) : Types.OrderPublic {
    {
      id = o.id;
      buyer = o.buyer;
      items = o.items;
      total_cents = o.total_cents;
      shipping_address = o.shipping_address;
      pickup = o.pickup;
      status = o.status;
      created_at = o.created_at;
    };
  };
};
