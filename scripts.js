let animationCounter = 0;

function calculateAnimationDuration(baseDuration, multiplier = 1) {

    const calculatedDuration = baseDuration * multiplier;
    return calculatedDuration;
}

function updateAnimationCounter() {
   
    animationCounter++;
    return animationCounter;
}


function getAnimationType(triggerType) {
    const animationTypes = {
        'click': 'bounce-active',
        'hover': 'slide-fade',
        'toggle': 'hidden'
    };
    
    return animationTypes[triggerType] || 'slide-fade';
}


function animateElement(element, animationClass, duration = 500) {
    if (!element || !animationClass) {
        console.error('Missing required parameters');
        return false;
    }
    
  
    element.classList.add(animationClass);
    
   
    if (!animationClass.includes('flipped') && !animationClass.includes('hidden')) {
        setTimeout(() => {
            element.classList.remove(animationClass);
        }, duration);
    }
    
    return true; 
}


document.addEventListener('DOMContentLoaded', function() {
   
    const triggerBtn = document.getElementById('triggerAnimation');
    const flipCardBtn = document.getElementById('flipCard');
    const toggleLoaderBtn = document.getElementById('toggleLoader');
    const animatedBox = document.getElementById('animatedBox');
    const flipCardElement = document.getElementById('flipCardElement');
    const loader = document.getElementById('loader');
    
   
    const animationDuration = calculateAnimationDuration(1000, 2);
    console.log('Calculated animation duration:', animationDuration);
    
 
    triggerBtn.addEventListener('click', function() {
     
        const animationClass = getAnimationType('click');
        const success = animateElement(animatedBox, animationClass, 1500);
        
        if (success) {
            const count = updateAnimationCounter();
            console.log(`Animation triggered ${count} times`);
        }
    });
    
    flipCardBtn.addEventListener('click', function() {
    
        flipCardElement.classList.toggle('flipped');
        
       
        const isFlipped = flipCardElement.classList.contains('flipped');
        console.log('Card is flipped:', isFlipped);
    });
    
   
    toggleLoaderBtn.addEventListener('click', function() {
      
        loader.classList.toggle('hidden');
        
        const isVisible = !loader.classList.contains('hidden');
        console.log('Loader visible:', isVisible);
        
  
        const loaderAnimationType = getAnimationType('toggle');
        console.log('Loader animation type would be:', loaderAnimationType);
    });
    

    animatedBox.addEventListener('mouseenter', function() {
        const hoverAnimation = getAnimationType('hover');
        animateElement(animatedBox, hoverAnimation, 1000);
    });
});


function createAnimationLogger(animationName) {
   
    let executionCount = 0;
    
    return function() {
        executionCount++;
        console.log(`${animationName} has been executed ${executionCount} times`);
        return executionCount;
    };
}


const bounceLogger = createAnimationLogger('Bounce Animation');
