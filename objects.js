// Les Récoltes sont dans le Silo
const siloMax = 1025;
let siloCounts = JSON.parse(localStorage.getItem('siloCounts')) || {
    // Champs
    "wheat": { id: 1, count: 0, imageName: "wheat.png", groupe: "champs", displayName: "Blé" },
    "corn": { id: 2, count: 0, imageName: "corn.png", groupe: "champs", displayName: "Maïs" },
    "soybean": { id: 3, count: 0, imageName: "", groupe: "champs", displayName: "Soja" },
    "sugarcane": { id: 4, count: 0, imageName: "", groupe: "champs", displayName: "Canne à sucre" },
    "carrots": { id: 5, count: 0, imageName: "", groupe: "champs", displayName: "Carottes" },
    "indigo": { id: 6, count: 0, imageName: "", groupe: "champs", displayName: "Indigo" },
    "pumpkin": { id: 7, count: 0, imageName: "", groupe: "champs", displayName: "Citrouille" },
    "cotton": { id: 8, count: 0, imageName: "", groupe: "champs", displayName: "Coton" },
    "pepper": { id: 9, count: 0, imageName: "", groupe: "champs", displayName: "Piment" },
    "tomato": { id: 10, count: 0, imageName: "", groupe: "champs", displayName: "Tomate" },
    "strawberry": { id: 11, count: 0, imageName: "", groupe: "champs", displayName: "Fraise" },
    "potato": { id: 12, count: 0, imageName: "", groupe: "champs", displayName: "Pomme de Terre" },
    "sesame": { id: 13, count: 0, imageName: "", groupe: "champs", displayName: "Sésame" },
    "pineapple": { id: 14, count: 0, imageName: "", groupe: "champs", displayName: "Ananas" },
    "lily": { id: 15, count: 0, imageName: "", groupe: "champs", displayName: "Lys" },
    "rice": { id: 16, count: 0, imageName: "", groupe: "champs", displayName: "Riz" },
    "lettuce": { id: 17, count: 0, imageName: "", groupe: "champs", displayName: "Laitue" },
    "garlic": { id: 18, count: 0, imageName: "", groupe: "champs", displayName: "Ail" },
    "sunflower": { id: 19, count: 0, imageName: "", groupe: "champs", displayName: "Tournesol" },
    "cabbage": { id: 20, count: 0, imageName: "", groupe: "champs", displayName: "Chou" },
    "onion": { id: 21, count: 0, imageName: "", groupe: "champs", displayName: "Oignon" },
    "cucumber": { id: 22, count: 0, imageName: "", groupe: "champs", displayName: "Concombre" },
    "beetroot": { id: 23, count: 0, imageName: "", groupe: "champs", displayName: "Betteraves" },
    "bellpepper": { id: 24, count: 0, imageName: "", groupe: "champs", displayName: "Poivron" },
    "ginger": { id: 25, count: 0, imageName: "", groupe: "champs", displayName: "Gingembre" },
    "tea leaves": { id: 26, count: 0, imageName: "", groupe: "champs", displayName: "Feuilles de thé" },
    "peony": { id: 27, count: 0, imageName: "", groupe: "champs", displayName: "Pivoine" },
    "broccoli": { id: 28, count: 0, imageName: "", groupe: "champs", displayName: "Brocoli" },
    "grape": { id: 29, count: 0, imageName: "", groupe: "champs", displayName: "Raisin" },
    "mint": { id: 30, count: 0, imageName: "", groupe: "champs", displayName: "Menthe" },
    "passion fruit": { id: 31, count: 0, imageName: "", groupe: "champs", displayName: "Fruit de la passion" },
    "mushroom": { id: 32, count: 0, imageName: "", groupe: "champs", displayName: "Champignon" },
    "eggplant": { id: 33, count: 0, imageName: "", groupe: "champs", displayName: "Aubergine" },
    "watermelon": { id: 34, count: 0, imageName: "", groupe: "champs", displayName: "Pastèque" },
    "clay": { id: 35, count: 0, imageName: "", groupe: "champs", displayName: "Argile" },
    "chickpeas": { id: 36, count: 0, imageName: "", groupe: "champs", displayName: "Pois Chiche" },
    
    // Arbres
    "apple": { id: 37, count: 0, imageName: "", groupe: "arbres", displayName: "Pomme" },
    "cherry": { id: 38, count: 0, imageName: "", groupe: "arbres", displayName: "Cerise" },
    "cocoa": { id: 39, count: 0, imageName: "", groupe: "arbres", displayName: "Cacao" },
    "olive": { id: 40, count: 0, imageName: "", groupe: "arbres", displayName: "Olive" },
    "lemon": { id: 41, count: 0, imageName: "", groupe: "arbres", displayName: "Citron" },
    "peach": { id: 42, count: 0, imageName: "", groupe: "arbres", displayName: "Pêche" },
    "banana": { id: 43, count: 0, imageName: "", groupe: "arbres", displayName: "Banane" },
    "plum": { id: 44, count: 0, imageName: "", groupe: "arbres", displayName: "Prune" },
    "mango": { id: 45, count: 0, imageName: "", groupe: "arbres", displayName: "Mangue" },

    // Mangue
    "raspberry": { id: 46, count: 0, imageName: "", groupe: "mangue", displayName: "Framboise" },
    "blackberry": { id: 47, count: 0, imageName: "", groupe: "mangue", displayName: "Mûre" },
    "honeycomb": { id: 48, count: 0, imageName: "", groupe: "mangue", displayName: "Rayon de miel" },
    "coffee bean": { id: 49, count: 0, imageName: "", groupe: "mangue", displayName: "Grain de Café" },
    "peanuts": { id: 50, count: 0, imageName: "", groupe: "mangue", displayName: "Cacahuètes" },
};


// Les produits sont dans la Grange
const grangeMax = 1050;
let grangeCounts = JSON.parse(localStorage.getItem('grangeCounts')) || {
    // Animaux
    "egg": { id: 1, count: 0, imageName: "", groupe: "animaux", displayName: "Œuf" },
    "milk": { id: 2, count: 0, imageName: "", groupe: "animaux", displayName: "Lait" },
    "bacon": { id: 3, count: 0, imageName: "", groupe: "animaux", displayName: "Bacon" },
    "wool": { id: 4, count: 0, imageName: "", groupe: "animaux", displayName: "Laine" },
    "fish_fillet": { id: 5, count: 0, imageName: "", groupe: "animaux", displayName: "Filet de Poisson" },
    "goat_milk": { id: 6, count: 0, imageName: "", groupe: "animaux", displayName: "Lait de Chèvre" },
    "honey": { id: 7, count: 0, imageName: "", groupe: "animaux", displayName: "Rayon de miel" },
    "lobster_tail": { id: 8, count: 0, imageName: "", groupe: "animaux", displayName: "Queue de Homard" },
    "feather": { id: 9, count: 0, imageName: "", groupe: "animaux", displayName: "Plume" },
    "peanuts": { id: 10, count: 0, imageName: "", groupe: "animaux", displayName: "Cacahuètes" },

    // Boulangerie
    "bread": { id: 11, count: 0, imageName: "bread.png", groupe: "boulangerie", displayName: "Pain" },
    "cornbread": { id: 12, count: 0, imageName: "cornbread.png", groupe: "boulangerie", displayName: "Pain de maïs" },
    "cookie": { id: 13, count: 0, imageName: "cookie.png", groupe: "boulangerie", displayName: "Cookie" },
    "raspberry_muffin": { id: 14, count: 0, imageName: "raspberry_muffin.png", groupe: "boulangerie", displayName: "Muffin aux framboises" },
    "blackberry_muffin": { id: 15, count: 0, imageName: "", groupe: "boulangerie", displayName: "Muffin à La Mûre" },
    "pizza": { id: 16, count: 0, imageName: "", groupe: "boulangerie", displayName: "Pizza" },
    "spicy_pizza": { id: 17, count: 0, imageName: "", groupe: "boulangerie", displayName: "Pizza Epicée" },
    "potato_bread": { id: 18, count: 0, imageName: "", groupe: "boulangerie", displayName: "Pain à La Patate" },
    "seafood_pizza": { id: 19, count: 0, imageName: "", groupe: "boulangerie", displayName: "Pizza Fruits de Mer" },
    "gingerbread_man": { id: 20, count: 0, imageName: "", groupe: "boulangerie", displayName: "Bonhomme en Pain D'Epice" },
    "banana_bread": { id: 21, count: 0, imageName: "", groupe: "boulangerie", displayName: "Pain à la Banane" },
    "macaron": { id: 22, count: 0, imageName: "", groupe: "boulangerie", displayName: "Macaron" },

    // Provenderie
    "chicken_food": { id: 23, count: 0, imageName: "chicken_food.png", groupe: "provenderie", displayName: "Ration Volaille" },
    "cow_food": { id: 24, count: 0, imageName: "cow_food.png", groupe: "provenderie", displayName: "Ration Vache" },
    "pig_food": { id: 25, count: 0, imageName: "pig_food.png", groupe: "provenderie", displayName: "Ration Cochon" },
    "sheep_food": { id: 26, count: 0, imageName: "sheep_food.png", groupe: "provenderie", displayName: "Ration Mouton" },
    "goat_food": { id: 27, count: 0, imageName: "", groupe: "provenderie", displayName: "Ration Chèvre" },  
    "wheat_bundle": { id: 28, count: 0, imageName: "", groupe: "provenderie", displayName: "Gerbe de Blé" },  
    "meat_bucket": { id: 29, count: 0, imageName: "", groupe: "provenderie", displayName: "Seau de Viande" },    

    // Laiterie
    "cream": { id: 30, count: 0, imageName: "cream.png", groupe: "laiterie", displayName: "Crème" },
    "butter": { id: 31, count: 0, imageName: "butter.png", groupe: "laiterie", displayName: "Beurre" },
    "cheese": { id: 32, count: 0, imageName: "cheese.png", groupe: "laiterie", displayName: "Fromage" },
    "goat_cheese": { id: 33, count: 0, imageName: "", groupe: "laiterie", displayName: "Fromage de Chèvre" },

    // Sucrerie
    "brown_sugar": { id: 34, count: 0, imageName: "brown_sugar.png", groupe: "sucrerie", displayName: "Sucre roux" },
    "white_sugar": { id: 35, count: 0, imageName: "white_sugar.png", groupe: "sucrerie", displayName: "Sucre blanc" },
    "syrup": { id: 36, count: 0, imageName: "syrup.png", groupe: "sucrerie", displayName: "Sirop" },

    // Marmite à Pop-Corn
    "corn_sack": { id: 37, count: 0, imageName: "corn_sack.png", groupe: "pop_corn", displayName: "Pop-Corn" },
    "buttered_corn_sack": { id: 38, count: 0, imageName: "buttered_corn_sack.png", groupe: "pop_corn", displayName: "Pop-Corn au Beurre" },
    "spicy_corn_sack": { id: 39, count: 0, imageName: "", groupe: "pop_corn", displayName: "Pop-Corn au Piment" },
    "honey_corn_sack": { id: 40, count: 0, imageName: "", groupe: "pop_corn", displayName: "Pop-Corn au Miel" },
    "chocolate_corn_sack": { id: 41, count: 0, imageName: "", groupe: "pop_corn", displayName: "Pop-Corn au Chocolat" },
    "snack_mix": { id: 42, count: 0, imageName: "", groupe: "pop_corn", displayName: "Mélange Apéritif" },

    // Produits du Barbecue
    "pancake": { id: 43, count: 0, imageName: "pancake.png", groupe: "barbecue", displayName: "Pancake" },
    "bacon_egg": { id: 44, count: 0, imageName: "bacon_egg.png", groupe: "barbecue", displayName: "Oeuf au bacon" },
    "hamburger": { id: 45, count: 0, imageName: "hamburger.png", groupe: "barbecue", displayName: "Hamburger" },
    "fishburger": { id: 46, count: 0, imageName: "", groupe: "barbecue", displayName: "Fishburger" },
    "roasted_tomatoes": { id: 47, count: 0, imageName: "", groupe: "barbecue", displayName: "Tomates Rôties" },
    "baked_potato": { id: 48, count: 0, imageName: "", groupe: "barbecue", displayName: "Patate au Four" },
    "fish_and_chips": { id: 49, count: 0, imageName: "", groupe: "barbecue", displayName: "Fish and Chips" },
    "lobster_skewer": { id: 50, count: 0, imageName: "", groupe: "barbecue", displayName: "Brochette de Homard" },
    "garlic_toast": { id: 51, count: 0, imageName: "", groupe: "barbecue", displayName: "Pain Grillé à L'Ail" },
    "grilled_onion": { id: 52, count: 0, imageName: "", groupe: "barbecue", displayName: "Oignon Grillé" },
    "winter_vegetables": { id: 53, count: 0, imageName: "", groupe: "barbecue", displayName: "Légumes D'Hiver" },
    "stuffed_peppers": { id: 54, count: 0, imageName: "", groupe: "barbecue", displayName: "Poivrons Farcis" },
    "grilled_eggplant": { id: 55, count: 0, imageName: "", groupe: "barbecue", displayName: "Aubergines Grillées" },
    "banana_pancakes": { id: 56, count: 0, imageName: "", groupe: "barbecue", displayName: "Pancakes à la Banane" },
    "fish_skewer": { id: 57, count: 0, imageName: "", groupe: "barbecue", displayName: "Brochette de Poisson" },

    // Four à Tartes
    "carrot_pie": { id: 58, count: 0, imageName: "carrot_pie.png", groupe: "tartes", displayName: "Tarte à la carotte" },
    "pumpkin_pie": { id: 59, count: 0, imageName: "pumpkin_pie.png", groupe: "tartes", displayName: "Tarte à la citrouille" },
    "bacon_pie": { id: 60, count: 0, imageName: "bacon_pie.png", groupe: "tartes", displayName: "Tarte aux lardons" },
    "apple_pie": { id: 61, count: 0, imageName: "", groupe: "tartes", displayName: "Tarte aux Pommes" },
    "fish_gratin": { id: 62, count: 0, imageName: "", groupe: "tartes", displayName: "Gratin de Poisson" },
    "shepherd_pie": { id: 63, count: 0, imageName: "", groupe: "tartes", displayName: "Hachis Parmentier" },
    "chocolate_tart": { id: 64, count: 0, imageName: "", groupe: "tartes", displayName: "Tarte au Chocolat" },
    "lemon_tart": { id: 65, count: 0, imageName: "", groupe: "tartes", displayName: "Tarte au Citron" },
    "peach_tart": { id: 66, count: 0, imageName: "", groupe: "tartes", displayName: "Tarte aux Pêches" },
    "passion_fruit_tart": { id: 67, count: 0, imageName: "", groupe: "tartes", displayName: "Tarte aux Fruits de la Passion" },
    "eggplant_parmesan": { id: 68, count: 0, imageName: "", groupe: "tartes", displayName: "Parmesan d'Aubergines" },

    // Métier à tisser
    "sweater": { id: 69, count: 0, imageName: "sweater.png", groupe: "métier à tisser", displayName: "Pull" },
    "fabric": { id: 70, count: 0, imageName: "fabric.png", groupe: "métier à tisser", displayName: "Tissu" },
    "blue_beanie": { id: 71, count: 0, imageName: "blue_beanie.png", groupe: "métier à tisser", displayName: "Bonneterie bleue" },
    "blue_sweater": { id: 72, count: 0, imageName: "blue_sweater.png", groupe: "métier à tisser", displayName: "Pull bleu" },
    "red_scarf": { id: 73, count: 0, imageName: "", groupe: "métier à tisser", displayName: "Echarpe Rouge" },
    "flower_shawl": { id: 74, count: 0, imageName: "", groupe: "métier à tisser", displayName: "Châle à Fleurs" },

    // Machine à Coudre
    "cotton_shirt": { id: 75, count: 0, imageName: "cotton_shirt.png", groupe: "machine à coudre", displayName: "Chemise en coton" },
    "wool_legging": { id: 76, count: 0, imageName: "wool_legging.png", groupe: "machine à coudre", displayName: "Legging en laine" },
    "sweater_vest": { id: 77, count: 0, imageName: "sweater_vest.png", groupe: "machine à coudre", displayName: "Gilet en laine" },
    "leather_purse": { id: 78, count: 0, imageName: "", groupe: "machine à coudre", displayName: "Sac en Cuir" },
    "red_skirt": { id: 79, count: 0, imageName: "", groupe: "machine à coudre", displayName: "Jupe Rouge" },
    "knitted_socks": { id: 80, count: 0, imageName: "", groupe: "machine à coudre", displayName: "Chaussettes Tricotées" },

    // Teinturerie
    "wool_cap": { id: 81, count: 0, imageName: "wool_cap.png", groupe: "teinturerie", displayName: "Casquette en laine" },
    "blue_scarf": { id: 82, count: 0, imageName: "blue_scarf.png", groupe: "teinturerie", displayName: "Echarpe Bleue" },
    "pink_purse": { id: 83, count: 0, imageName: "pink_purse.png", groupe: "teinturerie", displayName: "Sac Rose" },
    "green_skirt": { id: 84, count: 0, imageName: "", groupe: "teinturerie", displayName: "Jupe Verte" },
    "sweater_hat": { id: 85, count: 0, imageName: "", groupe: "teinturerie", displayName: "Chapeau en Pull" },
    "color_socks": { id: 86, count: 0, imageName: "", groupe: "teinturerie", displayName: "Chaussettes Colorées" },

    // Atelier de couture
    "silk_skirt": { id: 87, count: 0, imageName: "silk_skirt.png", groupe: "atelier de couture", displayName: "Jupe en Soie" },
    "dress": { id: 88, count: 0, imageName: "dress.png", groupe: "atelier de couture", displayName: "Robe" },
    "silk_shirt": { id: 89, count: 0, imageName: "silk_shirt.png", groupe: "atelier de couture", displayName: "Chemise en Soie" },
    "linen_pants": { id: 90, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Pantalon en Lin" },
    "silk_scarf": { id: 91, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Echarpe en Soie" },
    "robe": { id: 92, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Robe" },

    // Fabrique de bijoux
    "amethyst_necklace": { id: 93, count: 0, imageName: "amethyst_necklace.png", groupe: "bijoux", displayName: "Collier en Améthyste" },
    "topaz_earrings": { id: 94, count: 0, imageName: "topaz_earrings.png", groupe: "bijoux", displayName: "Boucles d'oreilles en Topaze" },
    "pearl_necklace": { id: 95, count: 0, imageName: "pearl_necklace.png", groupe: "bijoux", displayName: "Collier de Perles" },
    "ruby_ring": { id: 96, count: 0, imageName: "", groupe: "bijoux", displayName: "Bague en Rubis" },
    "sapphire_ring": { id: 97, count: 0, imageName: "", groupe: "bijoux", displayName: "Bague en Saphir" },
    "diamond_bracelet": { id: 98, count: 0, imageName: "", groupe: "bijoux", displayName: "Bracelet en Diamant" },

    // Confection de chocolat
    "dark_chocolate": { id: 99, count: 0, imageName: "dark_chocolate.png", groupe: "chocolat", displayName: "Chocolat Noir" },
    "milk_chocolate": { id: 100, count: 0, imageName: "milk_chocolate.png", groupe: "chocolat", displayName: "Chocolat au Lait" },
    "white_chocolate": { id: 101, count: 0, imageName: "white_chocolate.png", groupe: "chocolat", displayName: "Chocolat Blanc" },
    "candy_cane": { id: 102, count: 0, imageName: "", groupe: "chocolat", displayName: "Canne de Sucre" },
    "fondant": { id: 103, count: 0, imageName: "", groupe: "chocolat", displayName: "Fondant" },
    "chocolate_cookies": { id: 104, count: 0, imageName: "", groupe: "chocolat", displayName: "Cookies au Chocolat" },

    // Poterie
    "cup": { id: 105, count: 0, imageName: "cup.png", groupe: "poterie", displayName: "Tasse" },
    "vase": { id: 106, count: 0, imageName: "vase.png", groupe: "poterie", displayName: "Vase" },
    "pitcher": { id: 107, count: 0, imageName: "pitcher.png", groupe: "poterie", displayName: "Pichet" },
    "bowl": { id: 108, count: 0, imageName: "", groupe: "poterie", displayName: "Bol" },
    "flowerpot": { id: 109, count: 0, imageName: "", groupe: "poterie", displayName: "Pot de Fleurs" },
    "plate": { id: 110, count: 0, imageName: "", groupe: "poterie", displayName: "Assiette" },

    // Atelier de Bougies
    "candle": { id: 111, count: 0, imageName: "candle.png", groupe: "bougies", displayName: "Bougie" },
    "beeswax_candle": { id: 112, count: 0, imageName: "beeswax_candle.png", groupe: "bougies", displayName: "Bougie de Cire d'Abeille" },
    "rose_candle": { id: 113, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie à la Rose" },
    "lemon_candle": { id: 114, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie au Citron" },
    "lavender_candle": { id: 115, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie à la Lavande" },
    "ocean_candle": { id: 116, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie Océanique" },

    // Fabrication de Chaussures
    "wool_shoes": { id: 117, count: 0, imageName: "wool_shoes.png", groupe: "chaussures", displayName: "Chaussures en Laine" },
    "leather_shoes": { id: 118, count: 0, imageName: "leather_shoes.png", groupe: "chaussures", displayName: "Chaussures en Cuir" },
    "cotton_shoes": { id: 119, count: 0, imageName: "", groupe: "chaussures", displayName: "Chaussures en Coton" },
    "silk_shoes": { id: 120, count: 0, imageName: "", groupe: "chaussures", displayName: "Chaussures en Soie" },
    "rubber_boots": { id: 121, count: 0, imageName: "", groupe: "chaussures", displayName: "Bottes en Caoutchouc" },
    "sneakers": { id: 122, count: 0, imageName: "", groupe: "chaussures", displayName: "Baskets" },

    // Métier à Tisser
    "sweater": { id: 123, count: 0, imageName: "sweater.png", groupe: "tisser", displayName: "Pull" },
    "fabric": { id: 124, count: 0, imageName: "fabric.png", groupe: "tisser", displayName: "Tissu" },
    "blue_beanie": { id: 125, count: 0, imageName: "blue_beanie.png", groupe: "tisser", displayName: "Bonneterie bleue" },
    "blue_sweater": { id: 126, count: 0, imageName: "blue_sweater.png", groupe: "tisser", displayName: "Pull bleu" },
    "red_scarf": { id: 127, count: 0, imageName: "", groupe: "tisser", displayName: "Echarpe Rouge" },
    "flower_shawl": { id: 128, count: 0, imageName: "", groupe: "tisser", displayName: "Châle à Fleurs" },

    // Machine à Coudre
    "cotton_shirt": { id: 129, count: 0, imageName: "cotton_shirt.png", groupe: "coudre", displayName: "Chemise en coton" },
    "wool_legging": { id: 130, count: 0, imageName: "wool_legging.png", groupe: "coudre", displayName: "Legging en laine" },
    "sweater_vest": { id: 131, count: 0, imageName: "sweater_vest.png", groupe: "coudre", displayName: "Gilet en laine" },
    "leather_purse": { id: 132, count: 0, imageName: "", groupe: "coudre", displayName: "Sac en Cuir" },
    "red_skirt": { id: 133, count: 0, imageName: "", groupe: "coudre", displayName: "Jupe Rouge" },
    "knitted_socks": { id: 134, count: 0, imageName: "", groupe: "coudre", displayName: "Chaussettes Tricotées" },

    // Teinturerie
    "wool_cap": { id: 135, count: 0, imageName: "wool_cap.png", groupe: "teinturerie", displayName: "Casquette en laine" },
    "blue_scarf": { id: 136, count: 0, imageName: "blue_scarf.png", groupe: "teinturerie", displayName: "Echarpe Bleue" },
    "pink_purse": { id: 137, count: 0, imageName: "pink_purse.png", groupe: "teinturerie", displayName: "Sac Rose" },
    "green_skirt": { id: 138, count: 0, imageName: "", groupe: "teinturerie", displayName: "Jupe Verte" },
    "sweater_hat": { id: 139, count: 0, imageName: "", groupe: "teinturerie", displayName: "Chapeau en Pull" },
    "color_socks": { id: 140, count: 0, imageName: "", groupe: "teinturerie", displayName: "Chaussettes Colorées" },

    // Atelier de couture
    "silk_skirt": { id: 141, count: 0, imageName: "silk_skirt.png", groupe: "atelier de couture", displayName: "Jupe en Soie" },
    "dress": { id: 142, count: 0, imageName: "dress.png", groupe: "atelier de couture", displayName: "Robe" },
    "silk_shirt": { id: 143, count: 0, imageName: "silk_shirt.png", groupe: "atelier de couture", displayName: "Chemise en Soie" },
    "linen_pants": { id: 144, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Pantalon en Lin" },
    "silk_scarf": { id: 145, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Echarpe en Soie" },
    "robe": { id: 146, count: 0, imageName: "", groupe: "atelier de couture", displayName: "Robe" },

    // Fabrique de bijoux
    "amethyst_necklace": { id: 147, count: 0, imageName: "amethyst_necklace.png", groupe: "bijoux", displayName: "Collier en Améthyste" },
    "topaz_earrings": { id: 148, count: 0, imageName: "topaz_earrings.png", groupe: "bijoux", displayName: "Boucles d'oreilles en Topaze" },
    "pearl_necklace": { id: 149, count: 0, imageName: "pearl_necklace.png", groupe: "bijoux", displayName: "Collier de Perles" },
    "ruby_ring": { id: 150, count: 0, imageName: "", groupe: "bijoux", displayName: "Bague en Rubis" },
    "sapphire_ring": { id: 151, count: 0, imageName: "", groupe: "bijoux", displayName: "Bague en Saphir" },
    "diamond_bracelet": { id: 152, count: 0, imageName: "", groupe: "bijoux", displayName: "Bracelet en Diamant" },

    // Confection de chocolat
    "dark_chocolate": { id: 153, count: 0, imageName: "dark_chocolate.png", groupe: "chocolat", displayName: "Chocolat Noir" },
    "milk_chocolate": { id: 154, count: 0, imageName: "milk_chocolate.png", groupe: "chocolat", displayName: "Chocolat au Lait" },
    "white_chocolate": { id: 155, count: 0, imageName: "white_chocolate.png", groupe: "chocolat", displayName: "Chocolat Blanc" },
    "candy_cane": { id: 156, count: 0, imageName: "", groupe: "chocolat", displayName: "Canne de Sucre" },
    "fondant": { id: 157, count: 0, imageName: "", groupe: "chocolat", displayName: "Fondant" },
    "chocolate_cookies": { id: 158, count: 0, imageName: "", groupe: "chocolat", displayName: "Cookies au Chocolat" },

    // Poterie
    "cup": { id: 159, count: 0, imageName: "cup.png", groupe: "poterie", displayName: "Tasse" },
    "vase": { id: 160, count: 0, imageName: "vase.png", groupe: "poterie", displayName: "Vase" },
    "pitcher": { id: 161, count: 0, imageName: "pitcher.png", groupe: "poterie", displayName: "Pichet" },
    "bowl": { id: 162, count: 0, imageName: "", groupe: "poterie", displayName: "Bol" },
    "flowerpot": { id: 163, count: 0, imageName: "", groupe: "poterie", displayName: "Pot de Fleurs" },
    "plate": { id: 164, count: 0, imageName: "", groupe: "poterie", displayName: "Assiette" },

    // Atelier de Bougies
    "candle": { id: 165, count: 0, imageName: "candle.png", groupe: "bougies", displayName: "Bougie" },
    "beeswax_candle": { id: 166, count: 0, imageName: "beeswax_candle.png", groupe: "bougies", displayName: "Bougie de Cire d'Abeille" },
    "rose_candle": { id: 167, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie à la Rose" },
    "lemon_candle": { id: 168, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie au Citron" },
    "lavender_candle": { id: 169, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie à la Lavande" },
    "ocean_candle": { id: 170, count: 0, imageName: "", groupe: "bougies", displayName: "Bougie Océanique" },

    // Fabrication de Chaussures
    "wool_shoes": { id: 171, count: 0, imageName: "wool_shoes.png", groupe: "chaussures", displayName: "Chaussures en Laine" },
    "leather_shoes": { id: 172, count: 0, imageName: "leather_shoes.png", groupe: "chaussures", displayName: "Chaussures en Cuir" },
    "cotton_shoes": { id: 173, count: 0, imageName: "", groupe: "chaussures", displayName: "Chaussures en Coton" },
    "silk_shoes": { id: 174, count: 0, imageName: "", groupe: "chaussures", displayName: "Chaussures en Soie" },
    "rubber_boots": { id: 175, count: 0, imageName: "", groupe: "chaussures", displayName: "Bottes en Caoutchouc" },
    "sneakers": { id: 176, count: 0, imageName: "", groupe: "chaussures", displayName: "Baskets" }
};
