(function () {
  const button = document.querySelector(".btn");
  const author = document.querySelector(".author");
  const quote = document.querySelector(".quote");
  const shareBtn = document.querySelector(".share-btn");
  // const copied = document.querySelector(".copy");
  const container = document.querySelector(".container");

  const background = [
    "linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), rgba(25, 255, 255, 0.5))",
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(25, 255, 255, 0.5))",
    "linear-gradient(to bottom right, rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3))",
    "linear-gradient(to bottom right, rgba(25, 255, 255, 0.5), rgba(255, 255, 255, 0.3))",
    "linear-gradient(to top right, rgba(230, 255, 255, 0.5), rgba(255, 255, 255, 0.3))",
  ];
  const quotes = [
    {
      author: "Matthew Akahomen",
      quote: "Pressure cannot affect the erosion of milk",
    },
    {
      author: "John",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sed, fuga aliquid dolorem consectetur esse soluta ea autem repudiandae, suscipit animi ducimus, nihil quibusdam? Totam inventore cupiditate vitae minus facere?",
    },
    {
      author: "Nelson Mandela",
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      author: "Walt Disney",
      quote: "The way to get started is to quit talking and begin doing",
    },
    {
      author: "Steve Jobs",
      quote:
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    },
    {
      author: "Eleanor Roosevelt",
      quote:
        "If life were predictable it would cease to be life, and be without flavor.If life were predictable it would cease to be life, and be without flavor.",
    },
    {
      author: "Oprah Winfrey",
      quote:
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    },
    {
      author: "James Cameron",
      quote:
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    },
    {
      author: "John Lennon",
      quote: "Life is what happens when you're busy making other plans.",
    },
    {
      author: "Aristotle",
      quote:
        "It is during our darkest moments that we must focus to see the light.",
    },
    {
      author: "Ralph Waldo Emerson",
      quote:
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    },
    {
      author: "Mi Shebeirach",
      quote:
        "May the source of strength Who blessed the ones before us, Help us Find the courage to make our lives a blessing.",
    },
  ];

  button.addEventListener("click", (e) => {
    e.preventDefault();

    function generate() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      author.textContent = randomQuote.author;
      quote.textContent = randomQuote.quote;
    }
    generate();
    setBackground();
  });

  shareBtn.addEventListener("click", shareQuote);
  function shareQuote() {
    const quotes = quote.textContent.trim();
    const authors = author.textContent.trim();
    const textToShare = `"${quotes}" - ${authors}`;

    if (navigator.share) {
      navigator
        .share({
          title: "Quote",
          text: textToShare,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Failed to share", error));
    } else {
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = textToShare;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextarea);
      shareBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
      setTimeout(() => {
        shareBtn.innerHTML = `<i class="fa-solid fa-arrow-up-from-bracket"></i>`;
      }, 1000);
      console.log("Quote copied to clipboard");
      const shareableLink = `https://matthew.com/share?quote=${encodeURIComponent(
        textToShare
      )}`;
      console.log(`Share this: ${shareableLink}`);
      console.log("web share isn't supported");
    }
  }

  function setBackground() {
    const randomIndex = Math.floor(Math.random() * background.length);
    const randomImage = background[randomIndex];
    container.style.background = randomImage;
  }
})();
