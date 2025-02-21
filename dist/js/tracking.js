// Track competitor keyword referrals
const competitors = ['instagram', 'tiktok', 'twitter', 'snapchat', 'x.com'];
const referrer = document.referrer.toLowerCase();

competitors.forEach(competitor => {
  if (referrer.includes(competitor)) {
    // Log competitor referral
    console.log(`Visitor from ${competitor}`);
    
    // Show relevant comparison content
    const comparisonElement = document.getElementById(`${competitor}-comparison`);
    if (comparisonElement) {
      comparisonElement.style.display = 'block';
    }
  }
});

// Track search keywords
const urlParams = new URLSearchParams(window.location.search);
const searchKeywords = urlParams.get('q') || urlParams.get('query') || urlParams.get('s');

if (searchKeywords) {
  const keywords = searchKeywords.toLowerCase();
  competitors.forEach(competitor => {
    if (keywords.includes(competitor)) {
      // Show relevant comparison content
      const comparisonElement = document.getElementById(`${competitor}-comparison`);
      if (comparisonElement) {
        comparisonElement.style.display = 'block';
      }
    }
  });
}

// User retention tracking
window.addEventListener('load', function() {
    // Track time on page
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
        const timeSpent = Date.now() - startTime;
        // Send to analytics
        console.log(`Time spent: ${timeSpent}ms`);
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
        maxScroll = Math.max(maxScroll, scrollPercent);
    });
});
