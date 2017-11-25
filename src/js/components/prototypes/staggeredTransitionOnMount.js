import React, { Component } from "react";
import { StaggeredMotion, spring } from "react-motion";

import ContentMain from "../contentmain";
import ContentSidebar from "../contentsidebar";

import Logo from "../logo";

const startY = 100;
const startOpacity = 0;

// Lower damping and stiffness here will exaggerate the
// Start of the sequence of animations
const initialStiffness = 400;
const initialDamping = 60;

// Lower damping and stiffness here will exaggerate the
// End of the sequence of animations
const finalStiffness = 400;
const finalDamping = 60;
/* ---------------------------------- */

const library = [1, 2, 3, 4, 5];

export default class StaggeredTransitionOnMount extends Component {
    getDefaultStyles = () => {
        return library.map(todo => ({ y: startY, o: startOpacity }));
    };

    render() {
        return [
            <ContentMain>
                <StaggeredMotion
                    defaultStyles={this.getDefaultStyles()}
                    styles={prevStyles =>
                        prevStyles.map((_, i) => {
                            return i === 0
                                ? // Initial stiffness and damping
                                  {
                                      y: spring(0, {
                                          stiffness: initialStiffness,
                                          damping: initialDamping
                                      }),
                                      o: spring(1)
                                  }
                                : // Final stiffness and damping
                                  {
                                      y: spring(prevStyles[i - 1].y, {
                                          stiffness: finalStiffness,
                                          damping: finalDamping
                                      }),
                                      o: spring(prevStyles[i - 1].o)
                                  };
                        })
                    }
                >
                    {interpolatingStyles => (
                        <div className="content-row">
                            {interpolatingStyles.map((style, index) => {
                                const itemStyles = {
                                    width: "120px",
                                    height: "auto",
                                    WebkitTransform: `translate3d(0, ${
                                        style.y
                                    }px, 0)`,
                                    opacity: style.o
                                };

                                return <Logo key={index} style={itemStyles} />;
                            })}
                        </div>
                    )}
                </StaggeredMotion>
            </ContentMain>,
            <ContentSidebar>
                <h3>React Motion</h3>
                <p>
                    Staggered motion of a single component iterated by a map.
                    Number of items is determined by the length of a 'library'
                    array.
                </p>
                <p>
                    <a
                        href="https://github.com/chenglou/react-motion#staggeredmotion-"
                        target="_blank"
                    >
                        reference
                    </a>
                </p>
            </ContentSidebar>
        ];
    }
}
