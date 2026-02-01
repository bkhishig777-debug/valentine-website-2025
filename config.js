// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Мөнгөжин",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🫂', '💝', '💗', '🫂'],  // Heart emojis
        bears: ['🌊🐄', '🌊🐄']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Надад дуртай юм уу?",                                    // First interaction
            yesBtn: "Тийм",                                             // Text for "Yes" button
            noBtn: "Зайл",                                               // Text for "No" button
            secretAnswer: "Өө бүр хайртайшдэ! ❤️"           // Secret hover message
        },
        second: {
            text: "Харилцаагаа үргэлжлүүлэхийг хэр их хүсэж байна?",                          // For the love meter
            startText: "🧐",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 🌹", // The big question!
            yesBtn: "Тийм!",                                             // Text for "Yes" button
            noBtn: "Зайл"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "За ирээдүй ч өнгөлөг байна даа",  // Shows when they go past 5000%
        high: "🫂",              // Shows when they go past 1000%
        normal: "Дургүй л юм байналдаа"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Би ч энэ жилийг жаргалтай эхлүүлж байна даа",
        message: "За дүүрэг тал руу гарч ирээд халуун дулаан тэврэлтээ аваарай бээб",
        emojis: "🫂❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "7393b3",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#6699cc",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/djbb9ox0n/video/upload/v1769947362/Lana_Del_Rey_-_Chemtrails_Over_The_Country_Club_Official_Music_Video_ugeg80.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
