import React, {useEffect} from 'react';
import Particles from "react-tsparticles"
import {motion} from "framer-motion"

import "./styleSheets/stars.scss"
import {useLocation} from 'react-router';

var backgroundProps = {
    initial: {
        x: 0,
        y: 0,
        opacity: 0,
    },
    in: {
        x: 0,
        y: 0,
        transition: {delay: 0.2, duration: 0.5},
        opacity: 1,
        
    },
    out: {
        x: 0,
        y: 0,
        transition: {delay: 0.2, duration: 0.5},
        opacity: 0,
    },
}

var num: number = 0
//inserts num to the css prop to make it animate like an elevator
function particlesAnimation(direction: string) {
    var getParticles = document.getElementById("Stars") as HTMLDivElement
    if(direction === "forward"){
        getParticles.style.top = `${-num}%`;
    }
    else if(direction === "backwards"){
        getParticles.style.top = `${-num}%`;
    }
}

const Stars = (props: any) => {
    const location = useLocation()
    //Creating a number for each section to than use it for particlesAnimation
    useEffect(() =>{
      var numBefore = num
      function starsAnimation() {
        if(window.innerWidth > 900){
          if(location.pathname.toLowerCase() === "/home"){
            num = 100
          }
          else if(location.pathname.toLowerCase() === "/home/strength"){
            num = 200
          }
          else if(location.pathname.toLowerCase() ==="/home/routine"){
            num = 300
          }
          else if(location.pathname.toLowerCase() ==="/home/daily"){
            num = 400
          }

          if(num > numBefore){
              particlesAnimation("forward")
          }
          else if(num < numBefore){
              particlesAnimation("backwards")
          }
        }
        else return
      }
      starsAnimation()
    }, [location.pathname])

    if(window.innerWidth > 900){
      return (
        <motion.div animate="in" exit="out" initial="initial" variants={backgroundProps}>
            <Particles className="Stars" id="Stars" options={{
                    particles: {
                      number: {
                        value: 5,
                        density: {
                          enable: true,
                          value_area: 236.7442924896818
                        }
                      },
                      color: {
                        value: "#ffffff"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "img/github.svg",
                          width: 50,
                          height: 50
                        }
                      },
                      opacity: {
                        value: 0.7654732123833045,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 0.07992007992007992,
                          opacity_min: 0.1998001998001998,
                          sync: false
                        }
                      },
                      size: {
                        value: 1.5,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 40,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                      },
                      move: {
                        enable: true,
                        speed: 0.20,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: false,
                          mode: "repulse"
                        },
                        onclick: {
                          enable: false,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 400,
                          line_linked: {
                            opacity: 1
                          }
                        },
                        bubble: {
                          distance: 400,
                          size: 40,
                          duration: 2,
                          opacity: 8,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
            }}></Particles>
        </motion.div>
      );
    }
    else{
      return (
        <motion.div animate="in" exit="out" initial="initial" variants={backgroundProps}>
            <Particles className="StarsMobile" id="Stars" options={{
                    particles: {
                      number: {
                        value: 5,
                        density: {
                          enable: true,
                          value_area: 236.7442924896818
                        }
                      },
                      color: {
                        value: "#ffffff"
                      },
                      shape: {
                        type: "circle",
                        stroke: {
                          width: 0,
                          color: "#000000"
                        },
                        polygon: {
                          nb_sides: 5
                        },
                        image: {
                          src: "img/github.svg",
                          width: 50,
                          height: 50
                        }
                      },
                      opacity: {
                        value: 0.7654732123833045,
                        random: true,
                        anim: {
                          enable: true,
                          speed: 0.07992007992007992,
                          opacity_min: 0.1998001998001998,
                          sync: false
                        }
                      },
                      size: {
                        value: 1.5,
                        random: true,
                        anim: {
                          enable: false,
                          speed: 40,
                          size_min: 0.1,
                          sync: false
                        }
                      },
                      line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1
                      },
                      move: {
                        enable: true,
                        speed: 0.20,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                          enable: false,
                          rotateX: 600,
                          rotateY: 1200
                        }
                      }
                    },
                    interactivity: {
                      detect_on: "canvas",
                      events: {
                        onhover: {
                          enable: false,
                          mode: "repulse"
                        },
                        onclick: {
                          enable: false,
                          mode: "push"
                        },
                        resize: true
                      },
                      modes: {
                        grab: {
                          distance: 400,
                          line_linked: {
                            opacity: 1
                          }
                        },
                        bubble: {
                          distance: 400,
                          size: 40,
                          duration: 2,
                          opacity: 8,
                        },
                        repulse: {
                          distance: 200,
                          duration: 0.4
                        },
                        push: {
                          particles_nb: 4
                        },
                        remove: {
                          particles_nb: 2
                        }
                      }
                    },
                    retina_detect: true
            }}></Particles>
        </motion.div>
      )
    }
    
}

export default Stars;
