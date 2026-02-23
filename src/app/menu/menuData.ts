export type MenuItem = {
    _id: string;
    title: string;
    description: string;
    price: number;
    isBestSeller: boolean;
    imageUrl?: string;
};

export type MenuCategory = {
    _id: string;
    title: string;
    description?: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        _id: "cat_toast",
        title: "TOAST",
        description: "Generous general supplements available: Add Gouda Cheese 30 THB / Add Ham or Bacon + 20 THB",
        items: [
            { _id: "t1", title: "Veggie Omelet", description: "Toasted sourdough + Omelet with onion, bell peppers, mushroom and fresh herbs + salad.", price: 120, isBestSeller: false, imageUrl: "/images/t1_veggie_omelet.png" },
            { _id: "t2", title: "Sunny Avocado", description: "Toasted Sourdough + Fried egg + Gouda cheese + Avocado + salad.", price: 170, isBestSeller: false, imageUrl: "/images/t2_sunny_avocado.png" },
            { _id: "t3", title: "Avocado Benedict", description: "Toasted Sourdough + Poached eggs + Avocado + Hollandaise sauce + Chilli flakes + salad. Add bacon + 30 THB / Add salmon + 80 THB.", price: 150, isBestSeller: false, imageUrl: "/images/avocado_benedict.png" },
            { _id: "t4", title: "Two Eggs Your Way", description: "Toasted Sourdough + eggs any style + salad.", price: 120, isBestSeller: true, imageUrl: "/images/two_eggs_your_way.png" },
            { _id: "t5", title: "Gouda Eggs", description: "Toasted Sourdough + eggs any style + Gouda cheese + salad.", price: 150, isBestSeller: false, imageUrl: "/images/gouda_eggs.png" },
            { _id: "t6", title: "Smoked Bacon & Eggs", description: "Toasted Sourdough + Fried egg + Smoked bacon + salad.", price: 150, isBestSeller: false, imageUrl: "/images/smoked_bacon_eggs.png" },
            { _id: "t7", title: "Avocado Morning", description: "Toasted Sourdough + Scrambled eggs + Avocado + salad.", price: 140, isBestSeller: true, imageUrl: "/images/avocado_morning.png" },
            { _id: "t8", title: "Zesty Egg", description: "Toasted Sourdough + Boiled Eggs + Avocado + Mustard + Lemon + salad.", price: 140, isBestSeller: true, imageUrl: "/images/zesty_egg.png" },
            { _id: "t9", title: "Morning Fix", description: "Toasted Sourdough + Avocado + Fried egg + Smoked bacon + salad.", price: 170, isBestSeller: false, imageUrl: "/images/morning_fix.png" },
            { _id: "t10", title: "Poached Avo Toast", description: "Toasted Sourdough + Poached eggs + avocado + salad.", price: 140, isBestSeller: false, imageUrl: "/images/poached_avo_toast.png" },
            { _id: "t11", title: "Egg Salad", description: "Toasted Sourdough + Egg salad + salad.", price: 120, isBestSeller: false, imageUrl: "/images/egg_salad_toast.png" },
            { _id: "t12", title: "Grand Toast", description: "Toasted Sourdough + Eggs any style + Smoked bacon or Paris ham + Gouda cheese + Avocado + salad.", price: 200, isBestSeller: true, imageUrl: "/images/grand_toast.png" },
        ]
    },
    {
        _id: "cat_bfset",
        title: "BREAKFAST SETS",
        description: "Supplements available: + Gouda Cheese 30 THB",
        items: [
            { _id: "bs1", title: "Lili Classic", description: "Toasted Sourdough, eggs any style, salad. Coffee or any hot drink (+10 for iced). Fresh orange, apple or carrot juice.", price: 190, isBestSeller: false, imageUrl: "/images/lili_classic_set.png" },
            { _id: "bs2", title: "Avocado Morning Set", description: "Toasted Sourdough, eggs any style, avocado and salad. Coffee or any hot drink (+10 for iced). Fresh orange, apple or carrot juice.", price: 210, isBestSeller: false, imageUrl: "/images/avocado_morning_set.png" },
            { _id: "bs3", title: "Veggie Omelet Set", description: "Toasted sourdough, omelet with onion, bell peppers, mushroom and fresh herb and salad. Coffee or any hot drink (+10 for iced). Fresh orange, apple or carrot juice.", price: 190, isBestSeller: false, imageUrl: "/images/veggie_omelet_set.png" },
            { _id: "bs4", title: "Croissant Sunrise", description: "Croissant, eggs any style, smoked bacon. Fruit salad. Coffee or any hot drink (+10 for iced). Fresh orange, apple or carrot juice.", price: 190, isBestSeller: false, imageUrl: "/images/croissant_sunrise.png" },
        ]
    },
    {
        _id: "cat_toastie",
        title: "TOASTIE",
        items: [
            { _id: "ts1", title: "Green Melt", description: "Sourdough + Avocado + Tomato + Pesto + Gouda cheese.", price: 160, isBestSeller: true, imageUrl: "/images/green_melt.png" },
            { _id: "ts2", title: "The Savory One", description: "Sourdough + Gouda cheese + Mushrooms + Onions.", price: 130, isBestSeller: false, imageUrl: "/images/the_savory_one.png" },
            { _id: "ts3", title: "Dutch Delight", description: "Sourdough + Paris ham + Gouda cheese.", price: 150, isBestSeller: false, imageUrl: "/images/dutch_delight.png" },
        ]
    },
    {
        _id: "cat_special",
        title: "SPECIAL",
        items: [
            { _id: "sp1", title: "Focaccia Royale", description: "Olive Focaccia + Green pesto + Cream cheese + Avocado + Gouda cheese + Sundried tomato + Rocket salad.", price: 220, isBestSeller: true, imageUrl: "/images/focaccia_royale.png" },
            { _id: "sp2", title: "Italian Kiss", description: "Sourdough + Green pesto + Tomato confit + Burrata cheese + Balsamic glaze + Rocket salad.", price: 250, isBestSeller: true, imageUrl: "/images/italian_kiss.png" },
        ]
    },
    {
        _id: "cat_bagel",
        title: "BAGEL",
        items: [
            { _id: "bg1", title: "Cream Cheese", description: "Cream cheese.", price: 120, isBestSeller: false, imageUrl: "/images/bagel_cream_cheese.png" },
            { _id: "bg2", title: "Herbed Cream Cheese", description: "Herbed Cream cheese.", price: 130, isBestSeller: false, imageUrl: "/images/bagel_herbed_cream_cheese.png" },
            { _id: "bg3", title: "Cream Cheese & Bacon", description: "Cream cheese + bacon.", price: 150, isBestSeller: false, imageUrl: "/images/bagel_cream_cheese_bacon.png" },
            { _id: "bg4", title: "Smoked Salmon", description: "Smoked salmon, cream cheese, capers, onion, rocket salad.", price: 210, isBestSeller: false, imageUrl: "/images/bagel_smoked_salmon.png" },
            { _id: "bg5", title: "Egg & Bacon", description: "Scrambled eggs, bacon. Add cheese 30 baht.", price: 150, isBestSeller: false, imageUrl: "/images/bagel_egg_bacon.png" },
            { _id: "bg6", title: "Egg, Avocado & Bacon", description: "Fried eggs, Avocado, Bacon. Add Gouda cheese 30 baht.", price: 170, isBestSeller: false, imageUrl: "/images/bagel_egg_avocado_bacon.png" },
        ]
    },
    {
        _id: "cat_muesli",
        title: "MUESLI",
        items: [
            { _id: "ms1", title: "Tropical Sunrise", description: "Granola + Yoghurt + Mango + Pineapple + Blueberry + Banana + Coconut flakes + Honey drizzle.", price: 130, isBestSeller: false, imageUrl: "/images/muesli_tropical_sunrise.png" },
            { _id: "ms2", title: "Banana Nut Crunch", description: "Granola + Yoghurt + Banana + Walnuts + Roasted peanuts + Pumpkin seeds + Almond slice + Honey drizzle.", price: 140, isBestSeller: false, imageUrl: "/images/muesli_banana_nut.png" },
            { _id: "ms3", title: "Berry Good Bowl", description: "Granola + Yoghurt + Blueberry + Banana + Coconut flakes + Chia seeds + Honey drizzle.", price: 140, isBestSeller: false, imageUrl: "/images/muesli_berry_good.png" },
            { _id: "ms4", title: "Choco Banana Boost", description: "Granola + Yoghurt + Banana + Dark chocolate chips + Crushed almonds + Honey drizzle.", price: 140, isBestSeller: false, imageUrl: "/images/muesli_choco_banana.png" },
            { _id: "ms5", title: "Apple Cinnamon Hug", description: "Granola + Yoghurt + Apple + Cinnamon + Pecans + almonds + Honey drizzle.", price: 140, isBestSeller: false, imageUrl: "/images/muesli_apple_cinnamon.png" },
        ]
    },
    {
        _id: "cat_smoothie",
        title: "SMOOTHIE BOWL",
        description: "Options: Choose Yoghurt or Oat Milk. / Add homemade peanut butter 10 baht.",
        items: [
            { _id: "sm1", title: "Banango Bowl", description: "Mango + Banana + Blueberry + Granola + Coconut flakes.", price: 140, isBestSeller: false, imageUrl: "/images/smoothie_banango.png" },
            { _id: "sm2", title: "Berry Açaí Bliss", description: "Mixedberry + Banana + Acai powder + Granola + Chia seeds + Almond + Coconut flakes.", price: 150, isBestSeller: true, imageUrl: "/images/berry_acai_bliss.png" },
            { _id: "sm3", title: "Tropical Power Bowl", description: "Mixed fruits + Granola + Chia seeds + Almond + Sunflower seeds + Coconut flakes.", price: 140, isBestSeller: true, imageUrl: "/images/smoothie_tropical_power.png" },
            { _id: "sm4", title: "Choco Monkey Bowl", description: "Peanut butter + Banana + Cacao + Granola + Cacao nibs + Coconut flakes + Apple.", price: 160, isBestSeller: true, imageUrl: "/images/smoothie_choco_monkey.png" },
            { _id: "sm5", title: "Pretty In Pink", description: "Banana + Strawberry + Beetroot powder + Granola + Almond + Chia seeds + Kiwi + Blueberry.", price: 160, isBestSeller: false, imageUrl: "/images/smoothie_pretty_in_pink.png" },
            { _id: "sm6", title: "Pineapple Paradise", description: "Pineapple + Mango + Blue spirulina + Banana + Blueberry + Granola + Coconut flakes + Chia seeds.", price: 160, isBestSeller: true, imageUrl: "/images/smoothie_pineapple_paradise.png" },
            { _id: "sm7", title: "Protein Power Punch", description: "Pea protein isolate + Peanut butter + Cacao + Banana + Granola + Cacao nibs + Coconut flakes.", price: 180, isBestSeller: false, imageUrl: "/images/smoothie_protein_power.png" },
        ]
    },
    {
        _id: "cat_coffee",
        title: "COFFEE",
        description: "Oat Milk Free / Almond Milk +15THB. Level Sweet: 0% Not Sweet / 50% Less Sweet / 100% Normal Sweet / 150% More Sweet.",
        items: [
            { _id: "cf1", title: "Espresso", description: "Hot 50.-", price: 50, isBestSeller: false, imageUrl: "/images/coffee_espresso.png" },
            { _id: "cf2", title: "Americano", description: "Hot 50.- / Iced 60.-", price: 50, isBestSeller: false, imageUrl: "/images/coffee_americano.png" },
            { _id: "cf3", title: "Americano Honey", description: "Hot 55.- / Iced 65.-", price: 55, isBestSeller: false, imageUrl: "/images/coffee_americano_honey.png" },
            { _id: "cf4", title: "Americano Honey Lemon", description: "Iced 65.-", price: 65, isBestSeller: false, imageUrl: "/images/coffee_americano_honey_lemon.png" },
            { _id: "cf5", title: "Americano Orange", description: "Iced 60.-", price: 60, isBestSeller: false, imageUrl: "/images/coffee_americano_orange.png" },
            { _id: "cf6", title: "Americano Coconut", description: "Iced 60.-", price: 60, isBestSeller: false, imageUrl: "/images/coffee_americano_coconut.png" },
            { _id: "cf7", title: "Es-Yen", description: "Hot 50.- / Iced 60.-", price: 50, isBestSeller: false, imageUrl: "/images/coffee_es_yen.png" },
            { _id: "cf8", title: "Cappuccino", description: "Hot 50.- / Iced 60.-", price: 50, isBestSeller: false, imageUrl: "/images/coffee_cappuccino.png" },
            { _id: "cf9", title: "Latte", description: "Hot 55.- / Iced 65.-", price: 55, isBestSeller: false, imageUrl: "/images/coffee_latte.png" },
            { _id: "cf10", title: "Caramel Macchiato", description: "Hot 55.- / Iced 65.-", price: 55, isBestSeller: false, imageUrl: "/images/coffee_caramel_macchiato.png" },
            { _id: "cf11", title: "Mocha", description: "Hot 55.- / Iced 65.-", price: 55, isBestSeller: false, imageUrl: "/images/coffee_mocha.png" },
        ]
    },
    {
        _id: "cat_noncoffee",
        title: "NON COFFEE",
        items: [
            { _id: "nc1", title: "Cocoa", description: "Hot/Iced 60.- / Cocoa Cold Foam 120.-", price: 60, isBestSeller: false, imageUrl: "/images/nc_cocoa.png" },
            { _id: "nc2", title: "Salted Caramel Milk", description: "Salted Caramel Milk", price: 45, isBestSeller: false, imageUrl: "/images/nc_salted_caramel_milk.png" },
            { _id: "nc3", title: "Strawberry Milk", description: "Strawberry Milk", price: 45, isBestSeller: false, imageUrl: "/images/nc_strawberry_milk.png" },
            { _id: "nc4", title: "Mixedberry Milk", description: "Mixedberry Milk", price: 45, isBestSeller: false, imageUrl: "/images/nc_mixedberry_milk.png" },
            { _id: "nc5", title: "Strawberry Soda", description: "Strawberry Soda", price: 45, isBestSeller: false, imageUrl: "/images/nc_strawberry_soda.png" },
            { _id: "nc6", title: "Mixedberry Soda", description: "Mixedberry Soda", price: 45, isBestSeller: false, imageUrl: "/images/nc_mixedberry_soda.png" },
            { _id: "nc7", title: "Lemon & Lime Soda", description: "Lemon & Lime Soda", price: 45, isBestSeller: false, imageUrl: "/images/nc_lemon_lime_soda.png" },
            { _id: "nc8", title: "Peach Soda", description: "Peach Soda", price: 45, isBestSeller: false, imageUrl: "/images/nc_peach_soda.png" },
            { _id: "nc9", title: "Peach Tea", description: "Peach Tea", price: 45, isBestSeller: false, imageUrl: "/images/nc_peach_tea.png" },
            { _id: "nc10", title: "Honey Lemon", description: "Honey Lemon", price: 60, isBestSeller: false, imageUrl: "/images/nc_honey_lemon.png" },
            { _id: "nc11", title: "Matcha Latte", description: "Hot/Iced 90.- / Matcha Latte Cold Foam 120.-", price: 90, isBestSeller: false, imageUrl: "/images/nc_matcha_latte.png" },
            { _id: "nc12", title: "Matcha Latte Strawberry", description: "Matcha Latte Strawberry", price: 95, isBestSeller: false, imageUrl: "/images/nc_matcha_latte_strawberry.png" },
            { _id: "nc13", title: "Coconut Matcha Cold Foam", description: "Coconut Matcha Cold Foam", price: 120, isBestSeller: false, imageUrl: "/images/nc_coconut_matcha.png" },
            { _id: "nc14", title: "Thai Tea", description: "Thai Tea", price: 55, isBestSeller: false, imageUrl: "/images/nc_thai_tea.png" },
        ]
    },
    {
        _id: "cat_fruitshake",
        title: "FRUIT SHAKES (NO SUGAR)",
        items: [
            { _id: "fs1", title: "Fruit Shake 1", description: "Watermelon, Banana, Dragonfruit.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_1.png" },
            { _id: "fs2", title: "Fruit Shake 2", description: "Mango, Coconut, Avocado.", price: 65, isBestSeller: false, imageUrl: "/images/fs_shake_2.png" },
            { _id: "fs3", title: "Fruit Shake 3", description: "Orange, Cantaloupe, Pineapple.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_3.png" },
            { _id: "fs4", title: "Fruit Shake 4", description: "Almond, Mango, Banana, Coconut.", price: 65, isBestSeller: false, imageUrl: "/images/fs_shake_4.png" },
            { _id: "fs5", title: "Fruit Shake 5", description: "Avocado, Sweet milk.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_5.png" },
            { _id: "fs6", title: "Fruit Shake 6", description: "Mango, Orange, Cantaloupe.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_6.png" },
            { _id: "fs7", title: "Fruit Shake 7", description: "Mango, Passion fruit, Pineapple.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_7.png" },
            { _id: "fs8", title: "Fruit Shake 8", description: "Watermelon, Mango, Pineapple, Lime.", price: 50, isBestSeller: false, imageUrl: "/images/fs_shake_8.png" },
            { _id: "fs9", title: "Fruit Shake 9", description: "Mango, Yoghurt, Pineapple, Banana.", price: 65, isBestSeller: false, imageUrl: "/images/fs_shake_9.png" },
            { _id: "fs10", title: "Fruit Shake 10", description: "Papaya, Yoghurt, Pineapple, Coconut.", price: 65, isBestSeller: false, imageUrl: "/images/fs_shake_10.png" },
            { _id: "fs11", title: "Chocolate dream", description: "Banana, Dutch Cacao, Milk, soy or coconut milk.", price: 65, isBestSeller: false, imageUrl: "/images/fs_chocolate_dream.png" },
            { _id: "fs12", title: "Nutty banana", description: "Banana, Homemade Peanut Butter, Milk, soy or coconut milk.", price: 65, isBestSeller: false, imageUrl: "/images/fs_nutty_banana.png" },
            { _id: "fs13", title: "Choco-peanut", description: "Banana, Dutch Cacao, Homemade Peanut Butter, Milk, soy or coconut milk.", price: 70, isBestSeller: false, imageUrl: "/images/fs_choco_peanut.png" },
            { _id: "fs14", title: "Peanut lover", description: "Banana, Almond, Cinnamon, Homemade Peanut Butter, Milk, soy or coconut milk.", price: 70, isBestSeller: false, imageUrl: "/images/fs_peanut_lover.png" },
            { _id: "fs15", title: "Going Health Nuttz", description: "Coconut, Flax Seeds, Sunflower Seeds, Sesame Seeds, Almond, Pumpkin Seeds, Pea Protein Isolate, Banana.", price: 70, isBestSeller: false, imageUrl: "/images/fs_health_nuttz.png" },
            { _id: "fs16", title: "Crazy fruit smoothy", description: "Coconut, Mango, Banana, Pineapple, Lime.", price: 55, isBestSeller: false, imageUrl: "/images/fs_crazy_fruit.png" },
            { _id: "fs17", title: "Tropical island", description: "Avocado, Pineapple, Banana, Mango, Orange, Lime, Milk, soy or coconut milk.", price: 65, isBestSeller: false, imageUrl: "/images/fs_tropical_island.png" },
            { _id: "fs18", title: "Cookie style", description: "Banana, Apple, Pear, Yoghurt, Vanilla, Cinnamon.", price: 70, isBestSeller: false, imageUrl: "/images/fs_cookie_style.png" },
            { _id: "fs19", title: "Green machine", description: "Pear, Avocado, Cucumber, Lime, Koriander, Paksoy, Ginger, Coconut, Pea Protein Isolate.", price: 75, isBestSeller: false, imageUrl: "/images/fs_green_machine.png" },
            { _id: "fs20", title: "Crazy sexy goddess", description: "Avocado, Banana, Cucumber, Sunflower Sprouts, Coconut, Almond, Cinnamon, Dutch Cacao.", price: 75, isBestSeller: false, imageUrl: "/images/fs_crazy_sexy_goddess.png" },
            { _id: "fs21", title: "Clear skin sip", description: "Coconut, Cantaloupe, Parsley, Cucumber, Apple, Lime, Mint.", price: 55, isBestSeller: false, imageUrl: "/images/fs_clear_skin_sip.png" },
            { _id: "fs22", title: "Fountain of youth", description: "Coconut, Paksoy, Sunflower Sprouts, Parsley, Koriander, Guava, Pear, Ginger.", price: 75, isBestSeller: false, imageUrl: "/images/fs_fountain_of_youth.png" },
        ]
    },
    {
        _id: "cat_juice",
        title: "100% JUICE",
        description: "With Vegetables. Base price: 1 fruit = 60.- / 2 or more fruits = 70.-",
        items: [
            { _id: "j23", title: "Juice 23", description: "Carrot.", price: 60, isBestSeller: false, imageUrl: "/images/juice_23.png" },
            { _id: "j24", title: "Juice 24", description: "Carrot, Apple, Ginger.", price: 70, isBestSeller: false, imageUrl: "/images/juice_24.png" },
            { _id: "j25", title: "Juice 25", description: "Pineapple, Guava, Apple.", price: 70, isBestSeller: false, imageUrl: "/images/juice_25.png" },
            { _id: "j26", title: "Juice 26", description: "Beetroot, Guava, Carrot, Ginger.", price: 70, isBestSeller: false, imageUrl: "/images/juice_26.png" },
            { _id: "j27", title: "Juice 27", description: "Cantaloupe, Celery, Ginger.", price: 70, isBestSeller: false, imageUrl: "/images/juice_27.png" },
            { _id: "j28", title: "Juice 28", description: "Beetroot, Pineapple, Apple.", price: 70, isBestSeller: false, imageUrl: "/images/juice_28.png" },
            { _id: "j29", title: "Healthy veggie", description: "Paksoy, Parsley, Apple, Carrot, Ginger, Guava, Lime.", price: 70, isBestSeller: false, imageUrl: "/images/juice_29.png" },
            { _id: "j30", title: "All star", description: "Mango, Apple, Pear, Carrot, Guava, Beetroot.", price: 70, isBestSeller: true, imageUrl: "/images/juice_30.png" },
            { _id: "j31", title: "Recharge", description: "Carrot, Apple, Ginger, Lime.", price: 70, isBestSeller: false, imageUrl: "/images/juice_31.png" },
            { _id: "j32", title: "Green smoothie", description: "Paksoy, Celery, Apple, Shake or Juice.", price: 70, isBestSeller: false, imageUrl: "/images/juice_32.png" },
            { _id: "j33", title: "The super green", description: "Parsley, Celery, Apple, Mango, Banana, Lime.", price: 70, isBestSeller: false, imageUrl: "/images/juice_33.png" },
            { _id: "j34", title: "Bloody delicious", description: "Beetroot, Apple, Pear, Mango, Orange, Mint.", price: 70, isBestSeller: false, imageUrl: "/images/juice_34.png" },
        ]
    }
];
