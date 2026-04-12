import Common "common";

module {
  // Original shop category variants kept for existing products.
  // InventoryCategory mirrors ContainerSize for NIMS transplant items
  // and stays consistent with types/plants.mo ContainerSize.
  public type ProductCategory = {
    #Seedling;
    #Gallon1;
    #Gallon5;
    #Spice;
    #GardenInputs;
  };

  public type InventoryCategory = {
    #Oz16;
    #Gal1;
    #Gal3;
    #Gal5;
    #InGround;
    #OtherSize : Text;
  };

  public type Product = {
    id : Common.ProductId;
    var name : Text;
    var description : Text;
    var price_cents : Nat;
    category : ProductCategory;
    inventory_category : ?InventoryCategory; // set for NIMS-sourced items
    variety : ?Text;
    var active : Bool;
    var image_key : ?Text;
    var plant_id : ?Common.PlantId; // linked NIMS plant when applicable
  };

  public type ProductPublic = {
    id : Common.ProductId;
    name : Text;
    description : Text;
    price_cents : Nat;
    category : ProductCategory;
    inventory_category : ?InventoryCategory;
    variety : ?Text;
    active : Bool;
    image_key : ?Text;
    plant_id : ?Common.PlantId;
  };

  public type CreateProductInput = {
    name : Text;
    description : Text;
    price_cents : Nat;
    category : ProductCategory;
    inventory_category : ?InventoryCategory;
    variety : ?Text;
    image_key : ?Text;
    plant_id : ?Common.PlantId;
  };

  public type UpdateProductInput = {
    product_id : Common.ProductId;
    name : ?Text;
    description : ?Text;
    price_cents : ?Nat;
    active : ?Bool;
    image_key : ?Text;
  };

  public type OrderStatus = {
    #Pending;
    #Shipped;
    #PickedUp;
    #Cancelled;
  };

  public type OrderItem = {
    product_id : Common.ProductId;
    plant_id : ?Common.PlantId;
    quantity : Nat;
    price_cents : Nat;
  };

  public type Order = {
    id : Common.OrderId;
    buyer : Principal;
    items : [OrderItem];
    total_cents : Nat;
    shipping_address : ?Text;
    pickup : Bool;
    var status : OrderStatus;
    created_at : Common.Timestamp;
  };

  public type OrderPublic = {
    id : Common.OrderId;
    buyer : Principal;
    items : [OrderItem];
    total_cents : Nat;
    shipping_address : ?Text;
    pickup : Bool;
    status : OrderStatus;
    created_at : Common.Timestamp;
  };

  public type CreateOrderInput = {
    items : [OrderItem];
    shipping_address : ?Text;
    pickup : Bool;
  };
};
