import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import {
  EMAIL,
  GMAIL_COMPOSE,
  GITHUB_URL,
  LINKEDIN_URL,
  LEETCODE_URL,
  RESUME_PATH,
} from "../data/contact";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    // One rAF loop and one mousemove listener for the whole icon row, all torn
    // down on unmount. Rects are re-read on resize so the magnetic hover stays
    // aligned after a viewport change.
    const icons = Array.from(social.querySelectorAll("span")).flatMap((elem) => {
      const link = elem.querySelector("a");
      if (!link) return [];
      return [
        {
          elem,
          link,
          rect: elem.getBoundingClientRect(),
          targetX: 0,
          targetY: 0,
          currentX: 0,
          currentY: 0,
        },
      ];
    });

    const measure = () => {
      icons.forEach((icon) => {
        icon.rect = icon.elem.getBoundingClientRect();
        icon.targetX = icon.rect.width / 2;
        icon.targetY = icon.rect.height / 2;
      });
    };
    measure();

    let frameId = 0;
    const tick = () => {
      icons.forEach((icon) => {
        icon.currentX += (icon.targetX - icon.currentX) * 0.1;
        icon.currentY += (icon.targetY - icon.currentY) * 0.1;
        icon.link.style.setProperty("--siLeft", `${icon.currentX}px`);
        icon.link.style.setProperty("--siTop", `${icon.currentY}px`);
      });
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    const onMouseMove = (e: MouseEvent) => {
      icons.forEach((icon) => {
        const x = e.clientX - icon.rect.left;
        const y = e.clientY - icon.rect.top;
        const withinHotspot = x < 40 && x > 10 && y < 40 && y > 5;
        icon.targetX = withinHotspot ? x : icon.rect.width / 2;
        icon.targetY = withinHotspot ? y : icon.rect.height / 2;
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href={LEETCODE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noreferrer"
            aria-label={`Email ${EMAIL}`}
          >
            <FaEnvelope />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={RESUME_PATH}
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
