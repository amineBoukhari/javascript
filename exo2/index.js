       const circle = document.getElementById("circle");
        const distanceMax = 200;

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
        document.addEventListener("mousemove", (event) => {
            const rect = circle.getBoundingClientRect();
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const deltaX = rect.left - mouseX;
            const deltaY = rect.top - mouseY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            if (distance < distanceMax) {
                let newX = rect.left + deltaX * 0.1;
                let newY = rect.top + deltaY * 0.1;
                
                newX = Math.max(0, Math.min(window.innerWidth - rect.width - 10, newX));
                newY = Math.max(0, Math.min(window.innerHeight - rect.height - 10, newY));
        
                if ( distance < 100 ) {
                    newX = getRandomInt(window.innerWidth-rect.width)
                    newY = getRandomInt(window.innerHeight- rect.height )
                }
                
                circle.style.left = `${newX}px`;
                circle.style.top = `${newY}px`;
            }
        });