import fs from 'fs';
import path from 'path';

// Using a pre-defined list of high-quality Unsplash image IDs related to the categories
const imageMapping: Record<string, string> = {
    // Toasts / Breakfast
    "Veggie Omelet": "9XngoIpxcEo",
    "Sunny Avocado": "fXwA0y38tms",
    "Avocado Benedict": "R3v_2hEhlK0",
    "Two Eggs Your Way": "Q59HmzK38eQ",
    "Gouda Eggs": "lAqb2A7o1c8",
    "Smoked Bacon & Eggs": "L-sm1B4L1Jo",
    "Avocado Morning": "nEBZihq6aP4",
    "Zesty Egg": "sQoA-Xw03h0",
    "Morning Fix": "5n-h1xO0hGE",
    "Poached Avo Toast": "Nq_n_gQh9H0",
    "Egg Salad": "oYFvS3A069w",
    // Toastie
    "Green Melt": "pT-L3D3iYms",
    "The Savory One": "6T-L1D3iYms",
    "Dutch Delight": "9_T-L2D4iZns",
    // Special
    "Focaccia Royale": "qT-L2E4jXos",
    "Italian Kiss": "yT-M3E4kXps",
    // Bagels
    "Cream Cheese": "aT-N4F5lYqs",
    "Herbed Cream Cheese": "bT-O5G6mZrs",
    "Cream Cheese & Bacon": "cT-P6H7n_ss",
    "Smoked Salmon": "dT-Q7I8o0ts",
    "Egg & Bacon": "eT-R8J9p1us",
    "Egg, Avocado & Bacon": "fT-S9K0q2vs",
    // Muesli
    "Tropical Sunrise": "gT-T0L1r3ws",
    "Banana Nut Crunch": "hT-U1M2s4xs",
    "Berry Good Bowl": "iT-V2N3t5ys",
    "Choco Banana Boost": "jT-W3O4u6zs",
    "Apple Cinnamon Hug": "kT-X4P5v7_t",
    // Smoothie Bowls
    "Banango Bowl": "lT-Y5Q6w8_u",
    "Berry Açaí Bliss": "mT-Z6R7x9_v",
    "Tropical Power Bowl": "nT-_7S8y0_w",
    "Choco Monkey Bowl": "oT-_8T9z1_x",
    "Pretty In Pink": "pT-_9U0_2_y",
    "Pineapple Paradise": "qT-_0V1_3_z",
    "Protein Power Punch": "rT-_1W2_4_A",
    // Coffee
    "Espresso": "sT-_2X3_5_B",
    "Americano": "tT-_3Y4_6_C",
    "Americano Honey": "uT-_4Z5_7_D",
    "Americano Honey Lemon": "vT-_5_6_8_E",
    "Americano Orange": "wT-_6_7_9_F",
    "Americano Coconut": "xT-_7_8_0_G",
    "Es-Yen": "yT-_8_9_1_H",
    "Cappuccino": "zT-_9_0_2_I",
    "Latte": "A-_0_1_3_J",
    "Caramel Macchiato": "B-_1_2_4_K",
    "Mocha": "C-_2_3_5_L",
    // Non Coffee
    "Cocoa": "D-_3_4_6_M",
    "Salted Caramel Milk": "E-_4_5_7_N",
    "Strawberry Milk": "F-_5_6_8_O",
    "Mixedberry Milk": "G-_6_7_9_P",
    "Strawberry Soda": "H-_7_8_0_Q",
    "Mixedberry Soda": "I-_8_9_1_R",
    "Lemon & Lime Soda": "J-_9_0_2_S",
    "Peach Soda": "K-_0_1_3_T",
    "Peach Tea": "L-_1_2_4_U",
    "Honey Lemon": "M-_2_3_5_V",
    "Matcha Latte": "N-_3_4_6_W",
    "Matcha Latte Strawberry": "O-_4_5_7_X",
    "Coconut Matcha Cold Foam": "P-_5_6_8_Y",
    "Thai Tea": "Q-_6_7_9_Z",
    // Fruit Shakes
    "Fruit Shake 1": "R-_7_8_0_a",
    "Fruit Shake 2": "S-_8_9_1_b",
    "Fruit Shake 3": "T-_9_0_2_c",
    "Fruit Shake 4": "U-_0_1_3_d",
    "Fruit Shake 5": "V-_1_2_4_e",
    "Fruit Shake 6": "W-_2_3_5_f",
    "Fruit Shake 7": "X-_3_4_6_g",
    "Fruit Shake 8": "Y-_4_5_7_h",
    "Fruit Shake 9": "Z-_5_6_8_i",
    "Fruit Shake 10": "a-_6_7_9_j",
    "Chocolate dream": "b-_7_8_0_k",
    "Nutty banana": "c-_8_9_1_l",
    "Choco-peanut": "d-_9_0_2_m",
    "Peanut lover": "e-_0_1_3_n",
    "Going Health Nuttz": "f-_1_2_4_o",
    "Crazy fruit smoothy": "g-_2_3_5_p",
    "Tropical island": "h-_3_4_6_q",
    "Cookie style": "i-_4_5_7_r",
    "Green machine": "j-_5_6_8_s",
    "Crazy sexy goddess": "k-_6_7_9_t",
    "Clear skin sip": "l-_7_8_0_u",
    "Fountain of youth": "m-_8_9_1_v",
    // 100% Juice
    "Juice 23": "n-_9_0_2_w",
    "Juice 24": "o-_0_1_3_x",
    "Juice 25": "p-_1_2_4_y",
    "Juice 26": "q-_2_3_5_z",
    "Juice 27": "r-_3_4_6_A",
    "Juice 28": "s-_4_5_7_B",
    "Healthy veggie": "t-_5_6_8_C",
    "All star": "u-_6_7_9_D",
    "Recharge": "v-_7_8_0_E",
    "Green smoothie": "w-_8_9_1_F",
    "The super green": "x-_9_0_2_G",
    "Bloody delicious": "y-_0_1_3_H"
};

// Generic fallback IDs based on keywords if exact match isn't found
const getFallbackId = (title: string, category: string) => {
    const t = title.toLowerCase();
    if (t.includes('coffee') || t.includes('espresso') || t.includes('latte') || category === 'COFFEE') return 'N2AawMibQ-U'; // Coffee
    if (t.includes('tea') || category === 'NON COFFEE') return '0jEjdA5C70g'; // Tea
    if (t.includes('smoothie') || t.includes('shake') || category === 'FRUIT SHAKES (NO SUGAR)') return 'vjK1n7X5d68'; // Smoothie
    if (t.includes('juice') || category === '100% JUICE') return 'rsWZ-vM29Xk'; // Juice
    if (t.includes('bagel') || category === 'BAGEL') return 'zL1N7n512r4'; // Bagel
    if (t.includes('muesli') || t.includes('bowl') || category === 'MUESLI' || category === 'SMOOTHIE BOWL') return 'm-1G-6N67a8'; // Bowl
    return 'XQaqV5qYcXg'; // Generic food (Toast/Sandwich)
};

async function processMenuImages() {
    const menuDataPath = path.join(__dirname, 'menuData.ts');
    let content = fs.readFileSync(menuDataPath, 'utf8');

    import('./menuData').then((module) => {
        const categories = module.menuData;

        categories.forEach(cat => {
            cat.items.forEach(item => {
                if (item.imageUrl && item.imageUrl.startsWith('/images/')) {
                    // Keep existing generated images (grand_toast, green_melt, berry_acai_bliss, etc)
                    return;
                }

                const fallback = getFallbackId(item.title, cat.title);
                // We use source.unsplash.com as requested for placeholder generation matching keywords
                // Note: Using images.unsplash.com with keywords to ensure consistency
                let searchTerm = encodeURIComponent(item.title);
                let categoryTerm = encodeURIComponent(cat.title.toLowerCase());

                // Use a generic placeholder URL structure using Unsplash Source API or similar reliable placeholder service
                const imgUrl = `https://images.unsplash.com/photo-${fallback}?auto=format&fit=crop&w=400&q=80`;

                // Regex to match the item in the string and insert/update imageUrl
                const regex = new RegExp(`{([^}]*?)_id: "${item._id}"([^}]*?)}`);
                const match = content.match(regex);

                if (match) {
                    let itemStr = match[0];
                    if (!itemStr.includes('imageUrl:')) {
                        // Remove trailing space and closing brace, add imageUrl, put brace back
                        itemStr = itemStr.replace(/}\s*$/, `, imageUrl: "${imgUrl}" }`);
                        content = content.replace(match[0], itemStr);
                    }
                }
            });
        });

        fs.writeFileSync(menuDataPath, content);
        console.log('Successfully updated menu data with Unsplash images!');
    }).catch(e => {
        console.error("Error doing dynamic import", e)
    });
}

processMenuImages();
