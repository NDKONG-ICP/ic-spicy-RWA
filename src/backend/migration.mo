// Migration: handle two incompatible stable type changes introduced in this version:
//
// 1. plants — ContainerSize variant gained new constructors (#Cell72, #Cell128,
//    #Pot4Inch, #Pot6Inch, #Gal1New, #Gal3New, #Gal5Bucket, #Gal5GrowBag,
//    #Gal7Pot, #Gal7GrowBag, #Gal10GrowBag, #Gal15GrowBag).
//    Old stored values (#Oz16, #Gal1, #Gal3, #Gal5, #InGround, #Other) are
//    preserved as-is since they are all present in the new variant.
//
// 2. posts — Post.content changed from immutable Text to var Text so that
//    the 48-hour edit window feature can mutate content in place.

import Map "mo:core/Map";
import Set "mo:core/Set";
import List "mo:core/List";
import NewPlantTypes "types/plants";
import NewCommunityTypes "types/community";

module {

  // ── Old type definitions (copied from .old/src/backend/) ──────────────────

  type OldContainerSize = {
    #Oz16;
    #Gal1;
    #Gal3;
    #Gal5;
    #InGround;
    #Other : Text;
  };

  type OldPlant = {
    id : Nat;
    variety : Text;
    var genetics : Text;
    tray_id : Nat;
    cell_position : Nat;
    planting_date : Int;
    var germination_date : ?Int;
    var transplant_date : ?Int;
    var stage : { #Seed; #Seedling; #Mature };
    var nft_id : ?Text;
    nft_standard : { #ICRC37; #Hedera; #EXT };
    var sold : Bool;
    var sold_to : ?Principal;
    var notes : Text;
    var photos : [Text];
    var common_name : ?Text;
    var latin_name : ?Text;
    var origin : ?Text;
    var watering_schedule : ?Text;
    var pest_notes : ?Text;
    var additional_notes : ?Text;
    var is_cooked : Bool;
    var is_transplanted : Bool;
    var container_size : ?OldContainerSize;
    var for_sale : Bool;
    var photo_keys : [Text];
    var transplant_plant_id : ?Nat;
    source_plant_id : ?Nat;
    created_by : Principal;
  };

  type OldPost = {
    id : Nat;
    author : Principal;
    anonymous : Bool;
    content : Text; // was immutable
    image_key : ?Text;
    likes : Set.Set<Principal>;
    created_at : Int;
    var updated_at : Int;
  };

  // ── Old actor stable state ─────────────────────────────────────────────────

  type OldActor = {
    plants : Map.Map<Nat, OldPlant>;
    posts  : Map.Map<Nat, OldPost>;
  };

  // ── New actor stable state (fields changed by this migration) ─────────────

  type NewActor = {
    plants : Map.Map<Nat, NewPlantTypes.Plant>;
    posts  : Map.Map<Nat, NewCommunityTypes.Post>;
  };

  // ── Helpers ───────────────────────────────────────────────────────────────

  func migrateContainerSize(old : ?OldContainerSize) : ?NewPlantTypes.ContainerSize {
    switch old {
      case null null;
      case (?#Oz16)         ?#Oz16;
      case (?#Gal1)         ?#Gal1;
      case (?#Gal3)         ?#Gal3;
      case (?#Gal5)         ?#Gal5;
      case (?#InGround)     ?#InGround;
      case (?(#Other t))    ?(#Other t);
    };
  };

  func migratePlant(old : OldPlant) : NewPlantTypes.Plant {
    {
      id                  = old.id;
      variety             = old.variety;
      var genetics        = old.genetics;
      tray_id             = old.tray_id;
      cell_position       = old.cell_position;
      planting_date       = old.planting_date;
      var germination_date = old.germination_date;
      var transplant_date = old.transplant_date;
      var stage           = old.stage;
      var nft_id          = old.nft_id;
      nft_standard        = old.nft_standard;
      var sold            = old.sold;
      var sold_to         = old.sold_to;
      var notes           = old.notes;
      var photos          = old.photos;
      var common_name     = old.common_name;
      var latin_name      = old.latin_name;
      var origin          = old.origin;
      var watering_schedule = old.watering_schedule;
      var pest_notes      = old.pest_notes;
      var additional_notes = old.additional_notes;
      var is_cooked       = old.is_cooked;
      var is_transplanted = old.is_transplanted;
      var container_size  = migrateContainerSize(old.container_size);
      var for_sale        = old.for_sale;
      var photo_keys      = old.photo_keys;
      var transplant_plant_id = old.transplant_plant_id;
      source_plant_id     = old.source_plant_id;
      created_by          = old.created_by;
    };
  };

  func migratePost(old : OldPost) : NewCommunityTypes.Post {
    {
      id               = old.id;
      author           = old.author;
      anonymous        = old.anonymous;
      var content      = old.content; // promote immutable field to var
      image_key        = old.image_key;
      likes            = old.likes;
      created_at       = old.created_at;
      var updated_at   = old.updated_at;
    };
  };

  // ── Public migration entry point ───────────────────────────────────────────

  public func run(old : OldActor) : NewActor {
    let newPlants = old.plants.map<Nat, OldPlant, NewPlantTypes.Plant>(
      func(_id, p) { migratePlant(p) }
    );
    let newPosts = old.posts.map<Nat, OldPost, NewCommunityTypes.Post>(
      func(_id, p) { migratePost(p) }
    );
    { plants = newPlants; posts = newPosts };
  };
};
