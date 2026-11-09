"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  Star, 
  Clock, 
  Heart, 
  Plus, 
  Check, 
  SlidersHorizontal, 
  X, 
  ShoppingBag, 
  Sparkles, 
  Leaf,
  Coffee,
  UtensilsCrossed,
  Sun,
  Moon,
  Cookie,
  ArrowRight
} from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  category: "breakfast" | "lunch" | "dinner" | "snacks" | "sweets" | "break_food";
  categoryLabel: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  prepTime: string;
  badge?: "BESTSELLER" | "CHEF SPECIAL" | "TRENDING" | "NEW";
  image: string;
  portion: "regular" | "large" | "family";
  dietary: ("vegan" | "spicy" | "jain" | "gluten_free")[];
}

const ALL_MENU_ITEMS: MenuItem[] = [
  // ================= BREAKFAST =================
  {
    id: "b1",
    name: "Special Ghee Podi Roast Dosa",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "Crispy fermented crepe roasted in pure cow ghee, generously sprinkled with spicy gunpowder podi.",
    price: 140,
    rating: 4.9,
    reviewsCount: 420,
    prepTime: "10-12 min",
    badge: "BESTSELLER",
    image: "/images/polaroid-dosa.jpg",
    portion: "regular",
    dietary: ["spicy", "gluten_free"],
  },
  {
    id: "b2",
    name: "Mini Button Ghee Sambar Idli (14 pcs)",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "Tender steamed mini rice cakes submerged in hot aromatic shallot sambar with melted golden ghee.",
    price: 120,
    rating: 4.8,
    reviewsCount: 310,
    prepTime: "8-10 min",
    badge: "TRENDING",
    image: "/images/polaroid-idli.jpg",
    portion: "regular",
    dietary: ["jain", "gluten_free"],
  },
  {
    id: "b3",
    name: "Crispy Medu Vada (2 pcs)",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "Deep fried golden lentil donuts seasoned with black peppercorns, curry leaves, and ginger.",
    price: 80,
    rating: 4.7,
    reviewsCount: 185,
    prepTime: "5-8 min",
    badge: "BESTSELLER",
    image: "/images/polaroid-vadai.jpg",
    portion: "regular",
    dietary: ["vegan", "gluten_free"],
  },
  {
    id: "b4",
    name: "Mysore Masala Dosa",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "Crispy dosa smeared with fiery red garlic chili chutney & stuffed with spiced potato masala.",
    price: 160,
    rating: 4.8,
    reviewsCount: 365,
    prepTime: "12-15 min",
    badge: "CHEF SPECIAL",
    image: "/images/polaroid-dosa.jpg",
    portion: "large",
    dietary: ["spicy"],
  },
  {
    id: "b5",
    name: "Traditional Ghee Ven Pongal",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "Comforting rice & yellow moong dal cooked with crushed black pepper, cumin seeds and cashew nuts.",
    price: 110,
    rating: 4.9,
    reviewsCount: 290,
    prepTime: "8-10 min",
    badge: "NEW",
    image: "/images/polaroid-vadai.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },
  {
    id: "b6",
    name: "Saravanas Breakfast Feast Combo",
    category: "breakfast",
    categoryLabel: "Breakfast",
    description: "1 Ghee Masala Dosa, 2 Steamed Idlis, 1 Medu Vada, Sweet Kesari and Brass Filter Coffee.",
    price: 260,
    rating: 5.0,
    reviewsCount: 512,
    prepTime: "12-15 min",
    badge: "BESTSELLER",
    image: "/images/saravanas-hero.jpg",
    portion: "family",
    dietary: [],
  },

  // ================= LUNCH =================
  {
    id: "l1",
    name: "Grand South Indian Royal Thali",
    category: "lunch",
    categoryLabel: "Lunch",
    description: "Complete feast with 2 Poriyals, Kootu, Sambar, Rasam, Kara Kuzhambu, Curd, Appalam & Sweet Payasam.",
    price: 240,
    rating: 5.0,
    reviewsCount: 580,
    prepTime: "12-15 min",
    badge: "BESTSELLER",
    image: "/images/polaroid-thali.jpg",
    portion: "large",
    dietary: ["jain"],
  },
  {
    id: "l2",
    name: "Traditional Banana Leaf Meals",
    category: "lunch",
    categoryLabel: "Lunch",
    description: "Unlimited traditional lunchtime spread served on fresh plantain leaf with organic red and white rice.",
    price: 220,
    rating: 4.9,
    reviewsCount: 415,
    prepTime: "10-15 min",
    badge: "CHEF SPECIAL",
    image: "/images/banana-leaf-food.jpg",
    portion: "family",
    dietary: ["vegan"],
  },
  {
    id: "l3",
    name: "Karnataka Bisi Bele Bath with Boondi",
    category: "lunch",
    categoryLabel: "Lunch",
    description: "Wholesome rice, lentils and mixed vegetables slow cooked with aromatic freshly ground spices.",
    price: 130,
    rating: 4.7,
    reviewsCount: 198,
    prepTime: "10-12 min",
    badge: "TRENDING",
    image: "/images/saravanas-hero.jpg",
    portion: "regular",
    dietary: ["gluten_free", "spicy"],
  },
  {
    id: "l4",
    name: "Creamy Temple Curd Rice (Thayir Sadam)",
    category: "lunch",
    categoryLabel: "Lunch",
    description: "Cooling seasoned curd rice tempered with mustard seeds, curry leaves, ginger and pomegranate pearls.",
    price: 95,
    rating: 4.8,
    reviewsCount: 160,
    prepTime: "5-8 min",
    badge: "NEW",
    image: "/images/saravanas-hero.jpg",
    portion: "regular",
    dietary: ["jain", "gluten_free"],
  },

  // ================= DINNER =================
  {
    id: "d1",
    name: "Malabar Parotta with Veg Kurma (2 pcs)",
    category: "dinner",
    categoryLabel: "Dinner",
    description: "Flaky layered multi-fold flatbreads paired with rich coconut vegetable kurma salna.",
    price: 150,
    rating: 4.9,
    reviewsCount: 340,
    prepTime: "12-15 min",
    badge: "BESTSELLER",
    image: "/images/saravanas-hero.jpg",
    portion: "regular",
    dietary: ["spicy"],
  },
  {
    id: "d2",
    name: "Fluffy Poori Bhaji with Potato Masala",
    category: "dinner",
    categoryLabel: "Dinner",
    description: "Puffed golden pooris served with lightly spiced turmeric potato masala and fresh coconut chutney.",
    price: 130,
    rating: 4.8,
    reviewsCount: 225,
    prepTime: "10-12 min",
    badge: "TRENDING",
    image: "/images/banana-leaf-food.jpg",
    portion: "regular",
    dietary: ["vegan"],
  },
  {
    id: "d3",
    name: "Spicy Veg Kothu Parotta",
    category: "dinner",
    categoryLabel: "Dinner",
    description: "Shredded parotta griddled on high flame with country vegetables, onions and rich spicy gravy.",
    price: 160,
    rating: 4.8,
    reviewsCount: 210,
    prepTime: "15-18 min",
    badge: "CHEF SPECIAL",
    image: "/images/saravanas-hero.jpg",
    portion: "large",
    dietary: ["spicy"],
  },
  {
    id: "d4",
    name: "Paneer Butter Masala with 3 Chapatis",
    category: "dinner",
    categoryLabel: "Dinner",
    description: "Fresh cottage cheese cubes in velvety tomato butter gravy, paired with whole wheat soft chapatis.",
    price: 190,
    rating: 4.9,
    reviewsCount: 180,
    prepTime: "12-15 min",
    badge: "NEW",
    image: "/images/saravanas-hero.jpg",
    portion: "large",
    dietary: ["jain"],
  },

  // ================= SNACKS & CHAAT =================
  {
    id: "s1",
    name: "Crispy Punjabi Samosa (2 pcs)",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Golden flaky pastry stuffed with seasoned potatoes, green peas and whole coriander seeds.",
    price: 60,
    rating: 4.8,
    reviewsCount: 390,
    prepTime: "5-8 min",
    badge: "BESTSELLER",
    image: "/images/samosa.jpg",
    portion: "regular",
    dietary: ["vegan"],
  },
  {
    id: "s2",
    name: "Special Dahi Samosa Chaat",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Crushed samosas topped with sweetened yogurt, tangy tamarind, mint chutney, sev and pomegranate.",
    price: 90,
    rating: 4.9,
    reviewsCount: 245,
    prepTime: "8-10 min",
    badge: "TRENDING",
    image: "/images/samosa.jpg",
    portion: "regular",
    dietary: ["spicy"],
  },
  {
    id: "s3",
    name: "Hot Madras Onion Pakoda Basket",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Crunchy onion fritters tossed in gram flour, fennel, curry leaves and green chillies.",
    price: 85,
    rating: 4.7,
    reviewsCount: 190,
    prepTime: "8-10 min",
    badge: "CHEF SPECIAL",
    image: "/images/samosa.jpg",
    portion: "large",
    dietary: ["vegan", "gluten_free", "spicy"],
  },
  {
    id: "s4",
    name: "Pani Puri Royal Platter (8 pcs)",
    category: "snacks",
    categoryLabel: "Snacks",
    description: "Crispy puffed puris served with spiced potato chickpea filling and chilled mint-tamarind water.",
    price: 75,
    rating: 4.9,
    reviewsCount: 315,
    prepTime: "5-8 min",
    badge: "NEW",
    image: "/images/samosa.jpg",
    portion: "regular",
    dietary: ["vegan", "spicy"],
  },

  // ================= SWEETS & MITHAI =================
  {
    id: "sw1",
    name: "Pure Desi Ghee Mysore Pak (250g)",
    category: "sweets",
    categoryLabel: "Sweets",
    description: "Authentic melt-in-the-mouth porous golden squares crafted with royal gram flour and pure desi ghee.",
    price: 180,
    rating: 5.0,
    reviewsCount: 620,
    prepTime: "Instant",
    badge: "BESTSELLER",
    image: "/images/mysore-pak.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },
  {
    id: "sw2",
    name: "Warm Gulab Jamun with Pistachio (2 pcs)",
    category: "sweets",
    categoryLabel: "Sweets",
    description: "Khoya dumplings gently fried and steeped in saffron-cardamom scented warm sugar syrup.",
    price: 70,
    rating: 4.9,
    reviewsCount: 480,
    prepTime: "5 min",
    badge: "TRENDING",
    image: "/images/gulab-jamun.jpg",
    portion: "regular",
    dietary: ["jain"],
  },
  {
    id: "sw3",
    name: "Royal Kaju Katli (250g)",
    category: "sweets",
    categoryLabel: "Sweets",
    description: "Classic diamond-cut premium cashew nut confectionery made with Goan cashews and edible silver foil.",
    price: 260,
    rating: 4.9,
    reviewsCount: 340,
    prepTime: "Instant",
    badge: "CHEF SPECIAL",
    image: "/images/mysore-pak.jpg",
    portion: "family",
    dietary: ["gluten_free", "vegan", "jain"],
  },
  {
    id: "sw4",
    name: "Saffron Badam Halwa (100g)",
    category: "sweets",
    categoryLabel: "Sweets",
    description: "Rich dessert made from freshly soaked ground California almonds, pure cow ghee and Kashmiri saffron.",
    price: 130,
    rating: 4.8,
    reviewsCount: 215,
    prepTime: "5 min",
    badge: "NEW",
    image: "/images/mysore-pak.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },

  // ================= BREAK FOOD & BEVERAGES =================
  {
    id: "bf1",
    name: "Madras Brass Filter Coffee",
    category: "break_food",
    categoryLabel: "Break Food",
    description: "Signature freshly decocted chicory blend frothed to perfection in traditional shining brass dabarah.",
    price: 45,
    rating: 5.0,
    reviewsCount: 710,
    prepTime: "5-8 min",
    badge: "BESTSELLER",
    image: "/images/saravanas-hero.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },
  {
    id: "bf2",
    name: "Elaichi Ginger Masala Chai",
    category: "break_food",
    categoryLabel: "Break Food",
    description: "Strong brewed Assam black tea infused with crushed fresh ginger, green cardamom and whole milk.",
    price: 35,
    rating: 4.8,
    reviewsCount: 320,
    prepTime: "5-8 min",
    badge: "TRENDING",
    image: "/images/saravanas-hero.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },
  {
    id: "bf3",
    name: "Madurai Special Jigarthanda",
    category: "break_food",
    categoryLabel: "Break Food",
    description: "Chilled coastal dessert beverage with badam pisin gum, nannari root syrup, condensed milk and ice cream.",
    price: 85,
    rating: 4.9,
    reviewsCount: 275,
    prepTime: "5 min",
    badge: "CHEF SPECIAL",
    image: "/images/gulab-jamun.jpg",
    portion: "regular",
    dietary: ["gluten_free"],
  },
  {
    id: "bf4",
    name: "Tender Coconut Rose Milk",
    category: "break_food",
    categoryLabel: "Break Food",
    description: "Aromatic Damascus rose syrup blended with fresh coconut malai and chilled creamy milk.",
    price: 65,
    rating: 4.7,
    reviewsCount: 190,
    prepTime: "5 min",
    badge: "NEW",
    image: "/images/gulab-jamun.jpg",
    portion: "regular",
    dietary: ["gluten_free", "jain"],
  },
];

export default function FeaturedMenu() {
  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(300);
  const [selectedPortion, setSelectedPortion] = useState<string>("all");
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("popular");

  // Interaction state
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [cart, setCart] = useState<Record<string, number>>({});
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Toggle favorite
  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Add to cart
  const addToCart = (item: MenuItem) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
    setLastAddedName(item.name);
    setTimeout(() => {
      setLastAddedName(null);
    }, 2500);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory("ALL");
    setSearchQuery("");
    setMaxPrice(300);
    setSelectedPortion("all");
    setSelectedDietary([]);
  };

  // Toggle dietary checkbox
  const toggleDietary = (val: string) => {
    setSelectedDietary((prev) =>
      prev.includes(val) ? prev.filter((d) => d !== val) : [...prev, val]
    );
  };

  // Total items in cart
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartValue = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = ALL_MENU_ITEMS.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  // Filtered and Sorted Menu Items
  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== "ALL" && item.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // Price filter
      if (item.price > maxPrice) {
        return false;
      }

      // Portion filter
      if (selectedPortion !== "all" && item.portion !== selectedPortion) {
        return false;
      }

      // Dietary filter
      if (selectedDietary.length > 0) {
        const hasAllDietary = selectedDietary.every((d) =>
          item.dietary.includes(d as any)
        );
        if (!hasAllDietary) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") return b.reviewsCount - a.reviewsCount;
      if (sortBy === "price_asc") return a.price - b.price;
      if (sortBy === "price_desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, maxPrice, selectedPortion, selectedDietary, sortBy]);

  const categories = [
    { id: "ALL", label: "All Items", icon: Sparkles, count: ALL_MENU_ITEMS.length },
    { id: "breakfast", label: "Breakfast", icon: Sun, count: ALL_MENU_ITEMS.filter((i) => i.category === "breakfast").length },
    { id: "lunch", label: "Lunch Feasts", icon: UtensilsCrossed, count: ALL_MENU_ITEMS.filter((i) => i.category === "lunch").length },
    { id: "dinner", label: "Dinner Specials", icon: Moon, count: ALL_MENU_ITEMS.filter((i) => i.category === "dinner").length },
    { id: "snacks", label: "Snacks & Chaat", icon: Cookie, count: ALL_MENU_ITEMS.filter((i) => i.category === "snacks").length },
    { id: "sweets", label: "Sweets & Mithai", icon: Sparkles, count: ALL_MENU_ITEMS.filter((i) => i.category === "sweets").length },
    { id: "break_food", label: "Break Food / Drinks", icon: Coffee, count: ALL_MENU_ITEMS.filter((i) => i.category === "break_food").length },
  ];

  const activeFiltersCount = (selectedCategory !== "ALL" ? 1 : 0) + selectedDietary.length + (maxPrice < 300 ? 1 : 0) + (selectedPortion !== "all" ? 1 : 0);

  return (
    <section id="menu" className="relative py-12 sm:py-20 lg:py-24 bg-[#FFF8F0] border-t border-orange-200/60 overflow-hidden">
      
      {/* Subtle Ambient Background Warmth */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-100/40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-20 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5EE] border border-emerald-300/80 text-emerald-800 text-[11px] sm:text-xs font-semibold mb-2.5 sm:mb-3 shadow-2xs">
            <Leaf className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
            <span>100% Pure Vegetarian Delicacies</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-[#261C14] tracking-tight leading-tight mb-2 sm:mb-3">
            Authentic Culinary Menu
          </h2>

          {/* Subtitle */}
          <p className="text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed px-2">
            Freshly prepared breakfast tiffins, royal lunch feasts, evening snacks, traditional sweets and authentic filter coffee.
          </p>

          {/* Search Bar + Mobile Filter Trigger */}
          <div className="mt-4 sm:mt-6 max-w-lg mx-auto flex items-center gap-2">
            <div className="relative flex-1 flex items-center bg-white rounded-full border border-orange-200 shadow-sm pl-3.5 pr-1.5 py-1.5 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-200 transition-all">
              <Search className="w-4 h-4 text-stone-400 shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search mysore pak, dosa, thali..."
                className="w-full bg-transparent text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")} 
                  className="p-1 text-stone-400 hover:text-stone-600 mr-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="button"
                className="hidden xs:inline-flex px-4 py-2 rounded-full bg-linear-to-r from-orange-500 to-amber-600 text-white text-xs font-semibold shadow-xs"
              >
                Search
              </button>
            </div>

            {/* Mobile Filter Button (Clean and compact next to search) */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden shrink-0 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white border border-orange-200 text-orange-700 shadow-sm text-xs font-bold active:scale-95 transition-transform"
              aria-label="Open Filters"
            >
              <SlidersHorizontal className="w-4 h-4 text-orange-600" />
              <span>Filter</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-orange-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

        </div>

        {/* ================= CATEGORY QUICK-SWITCH PILL TABS ================= */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 sm:pb-4 mb-4 sm:mb-8 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/25 scale-102"
                    : "bg-white text-stone-700 hover:text-orange-600 hover:bg-orange-50/70 border border-orange-200/70 shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isSelected ? "bg-white/20 text-white" : "bg-orange-100 text-orange-800"
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= MAIN CONTENT: SIDEBAR + GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= DESKTOP SIDEBAR FILTERS ================= */}
          <aside className="hidden lg:block lg:col-span-3 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-orange-200/80 shadow-lg shadow-orange-950/5 sticky top-6">
            <div className="flex items-center justify-between pb-4 border-b border-orange-100 mb-5">
              <h3 className="font-serif font-bold text-lg text-[#261C14]">
                Refine Selection
              </h3>
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-stone-400 hover:text-orange-600 transition-colors"
              >
                Reset all
              </button>
            </div>

            {/* Filter: Categories */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Menu Category
              </h4>
              <div className="space-y-1.5">
                {categories.map((cat) => {
                  const isChecked = selectedCategory === cat.id;
                  return (
                    <label
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs sm:text-sm cursor-pointer select-none transition-colors ${
                        isChecked 
                          ? "bg-orange-50 text-orange-800 font-bold" 
                          : "text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                          isChecked 
                            ? "bg-orange-600 border-orange-600 text-white" 
                            : "border-stone-300 bg-white"
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-3" />}
                        </div>
                        <span>{cat.label}</span>
                      </div>
                      <span className="text-[11px] text-stone-400 font-medium">
                        {cat.count}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Filter: Price Range */}
            <div className="mb-6 pt-5 border-t border-orange-100">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Price Range
                </h4>
                <span className="text-xs font-extrabold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200/60">
                  Up to ₹{maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-stone-400 mt-2">
                <span>₹40</span>
                <span>₹300</span>
              </div>
            </div>

            {/* Filter: Portion Size */}
            <div className="mb-6 pt-5 border-t border-orange-100">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Serving Size
              </h4>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: "all", label: "All" },
                  { id: "regular", label: "Regular" },
                  { id: "large", label: "Large" },
                  { id: "family", label: "Family" },
                ].map((port) => (
                  <button
                    key={port.id}
                    onClick={() => setSelectedPortion(port.id)}
                    className={`py-1.5 text-xs font-semibold rounded-xl border transition-all ${
                      selectedPortion === port.id
                        ? "bg-orange-600 border-orange-600 text-white shadow-xs"
                        : "bg-white border-orange-200/80 text-stone-700 hover:bg-orange-50/50"
                    }`}
                  >
                    {port.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter: Dietary */}
            <div className="pt-5 border-t border-orange-100">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Dietary Preference
              </h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 select-none">
                  <div className="w-4 h-4 rounded-md bg-emerald-600 border border-emerald-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3 stroke-3" />
                  </div>
                  <span className="font-semibold text-emerald-800 flex items-center gap-1.5">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
                    100% Pure Vegetarian
                  </span>
                </div>

                {[
                  { id: "jain", label: "Jain Friendly (No Onion/Garlic)" },
                  { id: "vegan", label: "Vegan Friendly" },
                  { id: "spicy", label: "Spicy Specials" },
                  { id: "gluten_free", label: "Gluten-Free" },
                ].map((diet) => {
                  const isChecked = selectedDietary.includes(diet.id);
                  return (
                    <label
                      key={diet.id}
                      onClick={() => toggleDietary(diet.id)}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 hover:text-stone-900 cursor-pointer select-none group"
                    >
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                        isChecked 
                          ? "bg-orange-600 border-orange-600 text-white" 
                          : "border-stone-300 bg-white group-hover:border-stone-400"
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-3" />}
                      </div>
                      <span className={isChecked ? "font-bold text-stone-900" : "font-normal"}>
                        {diet.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ================= RIGHT PRODUCT GRID (2-COLUMNS ON MOBILE, 4-COLUMNS ON DESKTOP) ================= */}
          <div className="lg:col-span-9">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2">
              <span className="text-xs sm:text-base font-bold text-[#261C14]">
                Showing {filteredItems.length} Authentic Dishes
              </span>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-stone-600">
                <span className="font-medium text-stone-500 hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-orange-200 rounded-xl px-2.5 py-1 text-xs sm:text-sm text-stone-800 font-semibold focus:outline-none focus:border-orange-500 shadow-2xs cursor-pointer"
                >
                  <option value="popular">Popularity</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-orange-200/80 shadow-xs">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Search className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mb-1 sm:mb-2">
                  No matching dishes found
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm max-w-sm mx-auto mb-5 sm:mb-6">
                  Try adjusting your filters, price range, or search keyword to see our delicious dishes.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* 2-COLUMNS ON MOBILE, 3-COLUMNS ON TABLET, 4-COLUMNS ON DESKTOP */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
              {filteredItems.map((item) => {
                const isFav = !!favorites[item.id];
                const badgeColor = 
                  item.badge === "NEW" ? "bg-amber-100 text-amber-900 border-amber-300" :
                  item.badge === "BESTSELLER" ? "bg-linear-to-r from-orange-500 to-amber-500 text-white font-extrabold shadow-2xs" :
                  item.badge === "TRENDING" ? "bg-red-500 text-white font-extrabold shadow-2xs" :
                  "bg-emerald-100 text-emerald-900 border-emerald-300";

                return (
                  <div
                    key={item.id}
                    className="group bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 border border-orange-200/70 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Pure Veg Icon + Badge + Favorite */}
                      <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-1 sm:gap-1.5 overflow-hidden">
                          {/* Authentic Indian Pure Veg Green Dot Icon */}
                          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 border border-emerald-600 rounded-xs p-0.5 flex items-center justify-center bg-white shrink-0">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-600" />
                          </div>

                          {item.badge && (
                            <span className={`text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.2 sm:py-0.5 rounded-md font-bold tracking-wider uppercase truncate ${badgeColor}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => toggleFavorite(item.id)}
                          aria-label="Add to favorites"
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-stone-50 hover:bg-red-50 flex items-center justify-center transition-colors text-stone-400 hover:text-red-500 ml-auto shrink-0"
                        >
                          <Heart 
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-125 ${
                              isFav ? "fill-red-500 text-red-500" : ""
                            }`} 
                          />
                        </button>
                      </div>

                      {/* Food Image Container */}
                      <div className="relative w-full aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-stone-50 mb-2 sm:mb-3 group-hover:scale-102 transition-transform duration-300">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h4 className="font-bold text-[#261C14] text-xs sm:text-base leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 mb-1 font-serif">
                        {item.name}
                      </h4>

                      {/* Description (desktop only for clean compact mobile cards) */}
                      <p className="hidden sm:block text-stone-500 text-xs leading-relaxed line-clamp-2 mb-3">
                        {item.description}
                      </p>
                    </div>

                    <div>
                      {/* Rating & Prep Time */}
                      <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-stone-500 font-medium mb-2 sm:mb-3">
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-400" />
                          <span className="font-bold text-stone-800">{item.rating}</span>
                          <span className="text-stone-400 hidden xs:inline">({item.reviewsCount})</span>
                        </div>

                        <div className="flex items-center gap-0.5 sm:gap-1 text-stone-400 text-[9px] sm:text-[11px]">
                          <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span>{item.prepTime}</span>
                        </div>
                      </div>

                      {/* Price & Add Button */}
                      <div className="flex items-center justify-between pt-2 border-t border-orange-100">
                        <span className="text-sm sm:text-lg font-black text-[#261C14]">
                          ₹{item.price}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          aria-label={`Add ${item.name} to order`}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white flex items-center justify-center shadow-md shadow-orange-600/25 transition-transform active:scale-90 hover:scale-110 cursor-pointer"
                        >
                          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

      {/* ================= MOBILE FILTER BOTTOM SHEET DRAWER ================= */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div 
            className="w-full max-h-[85vh] bg-white rounded-t-3xl p-5 overflow-y-auto animate-in slide-in-from-bottom duration-300 shadow-2xl"
          >
            {/* Drawer Handle */}
            <div className="w-12 h-1.5 rounded-full bg-stone-300 mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-orange-600" />
                <h3 className="font-serif font-bold text-lg text-[#261C14]">
                  Filter Menu Dishes
                </h3>
              </div>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-stone-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Price Range */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  Price Limit
                </h4>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                  Up to ₹{maxPrice}
                </span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none accent-orange-600"
              />
            </div>

            {/* Serving Size */}
            <div className="mb-5">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
                Serving Size
              </h4>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { id: "all", label: "All" },
                  { id: "regular", label: "Regular" },
                  { id: "large", label: "Large" },
                  { id: "family", label: "Family" },
                ].map((port) => (
                  <button
                    key={port.id}
                    onClick={() => setSelectedPortion(port.id)}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                      selectedPortion === port.id
                        ? "bg-orange-600 border-orange-600 text-white shadow-xs"
                        : "bg-stone-50 border-stone-200 text-stone-700"
                    }`}
                  >
                    {port.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2.5">
                Dietary Preference
              </h4>
              <div className="space-y-2">
                {[
                  { id: "jain", label: "Jain Friendly (No Onion/Garlic)" },
                  { id: "vegan", label: "Vegan Friendly" },
                  { id: "spicy", label: "Spicy Specials" },
                  { id: "gluten_free", label: "Gluten-Free" },
                ].map((diet) => {
                  const isChecked = selectedDietary.includes(diet.id);
                  return (
                    <label
                      key={diet.id}
                      onClick={() => toggleDietary(diet.id)}
                      className="flex items-center gap-2.5 text-xs text-stone-700 py-1 cursor-pointer"
                    >
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        isChecked 
                          ? "bg-orange-600 border-orange-600 text-white" 
                          : "border-stone-300 bg-white"
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-3" />}
                      </div>
                      <span className={isChecked ? "font-bold text-stone-900" : "font-normal"}>
                        {diet.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 pt-3 border-t border-stone-200">
              <button
                onClick={clearAllFilters}
                className="w-1/3 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-2/3 py-3 rounded-2xl bg-linear-to-r from-orange-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-orange-600/30 transition-transform active:scale-95"
              >
                View {filteredItems.length} Dishes
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= FLOATING CART BAR (MOBILE-OPTIMIZED) ================= */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-40 w-[94%] sm:w-11/12 max-w-md animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#261C14] text-white p-3 sm:p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-orange-500/40 backdrop-blur-md">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold shrink-0">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="block text-[10px] sm:text-xs text-orange-300 font-semibold uppercase tracking-wider">
                  Order Summary
                </span>
                <span className="text-xs sm:text-sm font-bold">
                  {totalCartCount} item{totalCartCount > 1 ? "s" : ""} • ₹{totalCartValue}
                </span>
              </div>
            </div>

            <Link
              href="#contacts"
              className="inline-flex items-center gap-1 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-linear-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-600/30 transition-transform hover:scale-105 active:scale-95"
            >
              <span>Order Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

      {/* Instant Add-to-cart Toast */}
      {lastAddedName && (
        <div className="fixed top-16 right-4 sm:right-6 z-50 bg-[#261C14] text-white px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold border border-orange-500/30 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
            <Check className="w-2.5 h-2.5 stroke-3" />
          </div>
          <span className="truncate max-w-50">Added &quot;{lastAddedName}&quot;</span>
        </div>
      )}

    </section>
  );
}
