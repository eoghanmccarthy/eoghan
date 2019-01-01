import React from "react";
import { Transition, animated } from "react-spring";

import Logo from "components/logo";
import Links from "components/bio/links";

import skills from "app/config/skills";

const Modal: React.FunctionComponent<{
  isVisible: boolean;
}> = ({ isVisible }) => (
  <Transition
    native
    items={isVisible}
    from={{ transform: "translateY(75px)" }}
    enter={{ transform: "translateY(0)" }}
    leave={{ transform: "translateY(75px)" }}
    config={{
      tension: 98,
      friction: 22,
      clamp: true
    }}
  >
    {isVisible =>
      isVisible &&
      (props => (
        <animated.div style={props} className={"bio"}>
          <div className={"bio__header"}>
            <div className={"header__logo"}>
              <Logo />
            </div>
            <div className={"header__title"}>
              <h1>
                <mark>&ensp;front-end developer & graphic designer</mark>
              </h1>
            </div>
          </div>
          <div className={"bio__main"}>
            <mark>
              <a href="mailto:me@eoghan.io">me@eoghan.io</a>
            </mark>
            <ul>
              {skills
                .sort((a: any, b: any) => a.name - b.name)
                .map((item: { name: string }, index: number) => (
                  <li key={index}>
                    {item.name}
                    {index !== skills.length - 1
                      ? `${String.fromCharCode(8194)}/${String.fromCharCode(
                          8194
                        )}`
                      : ""}
                  </li>
                ))}
            </ul>
          </div>
          <div className={"bio__footer"}>
            <Links />
          </div>
        </animated.div>
      ))
    }
  </Transition>
);

export default Modal;