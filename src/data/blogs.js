// Import your text files here

// delhi blog content
import iwasdelhi from './stories/iwasdelhi.txt?raw';
import iwasDelhiImg from '../assets/images/iwasdelhi.png';

// I want to eat your pancreas
import iwteyp from './stories/iwteyp.txt?raw';
import iwteypImg from '../assets/images/iwteyp.jpg'

// Wake up Sid
import wakeupsid from './stories/wakeupsid.txt?raw';
import wakeupsidImg from '../assets/images/wakeupsid.jpg'

export const blogs = [
  {
    id: 1,
    title: "I was Delhi",
    thought: "Sometimes, a city isn’t just coordinates on a map; it’s a living, breathing creature that settles into your bones. You don't just visit Delhi; you survive it, you love it, and eventually, you become it.",
    excerpt: "A personal reflection on the chaos, the history, and the heartbeat of India’s capital. From the silence of ancient tombs to the roar of Connaught Place, this is a love letter to the city that taught me how to feel everything at once.",
    
    // 2. Assign the imported text to the content field
    content: iwasdelhi, 
    
    image: iwasDelhiImg, 
    date: "Jan 6, 2026"
  },
  // ... rest of your blogs
  {
    id: 2,
    title: "Living With Dying",
    thought: "We often sleepwalk toward the end, forgetting that time is finite. But loving someone with a countdown wakes you up. It screams a singular truth: I do not want to merely exist; I want to be consumed by the sheer, terrifying violence of being alive.",
    excerpt: "This is not merely a tragedy about a girl with an expiration date; it is a manifesto on how to breathe when the air is running out. It explores the terrifying beauty of connecting with your polar opposite, teaching us that to truly live, we must have the courage to form bonds that can break us.",
    
    // 2. Assign the imported text to the content field
    content: iwteyp, 
    
    image: iwteypImg, 
    date: "Jan 9, 2026"
  },
  {
    id: 3,
    title: "Learning to See",
    thought: "We often think love is about finding someone who completes us. But this story whispers a different truth: Love is finding the person who hands you a mirror, waits patiently while you fix your hair, and then quietly hands you a camera to capture who you’ve become.",
    excerpt: "This is a story about the terrifying beauty of growing up, not alone, but alongside someone who forces you to be better. It captures how a boy found his purpose through a lens, and how a girl became the light that allowed him to finally take the picture.",
    
    // 2. Assign the imported text to the content field
    content: wakeupsid, 
    
    image: wakeupsidImg, 
    date: "Jan 15, 2026"
  },

];