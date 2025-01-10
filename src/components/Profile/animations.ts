export const profileAnimations = {
  container: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  border: {
    animate: { 
      rotate: 360,
      borderColor: ['#60A5FA', '#3B82F6', '#2563EB', '#60A5FA']
    },
    transition: { 
      duration: 8, 
      repeat: Infinity, 
      ease: "linear" 
    }
  }
};