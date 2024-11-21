import React, { useEffect, useRef } from "react";
import { useMultipleScrollTextAnimation } from "../hooks/useMultipleScrollTextAnimation";
import styles from "./VerticalBarChart.module.css";
import Image from "next/image";

const VerticalBarChart = () => {
  const { visibleTexts, textRefs } = useMultipleScrollTextAnimation();
  const iconRefs = useRef([]); // Referenz für Icons

  useEffect(() => {
    const bars = document.querySelectorAll(`.${styles.barFill}`);

    const setBarHeight = (bar, index) => {
      const percentage = bar.getAttribute("data-percentage");
      const heightInPixels = percentage * 4.5; // Beispiel: 4.5 Pixel pro Prozent

      setTimeout(() => {
        bar.style.height = heightInPixels + "px";
        bar.classList.add("loaded"); // Füge die Klasse hinzu, um die Animation zu starten
      }, index * 200);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar, index) => {
              setBarHeight(bar, index);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    bars.forEach((bar) => {
      observer.observe(bar);
    });

    // Cleanup: Die Beobachter werden entfernt, wenn die Komponente unmontiert wird
    return () => {
      observer.disconnect();
    };
  }, []);

  // Beobachte Icons für die Animation
  useEffect(() => {
    const icons = iconRefs.current; // Array aller Icons

    const iconObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const icon = entry.target;
            icon.classList.add(styles.loaded); // Füge die Klasse 'loaded' hinzu, wenn das Icon sichtbar ist
          }
        });
      },
      { threshold: 0.5 }
    );

    // Beobachte jedes Icon
    icons.forEach((icon) => {
      if (icon) {
        iconObserver.observe(icon);
      }
    });

    // Cleanup des Icon-Observers
    return () => {
      iconObserver.disconnect();
    };
  }, []);

  return (
    <section className={` ${styles.verticalBarChartBgcolor}`}>
          <div
            className={`container  ${styles.containerGrid}`}
          >
            <div className={` ${styles.innerContent}`}>
              <p
                className={` container-fluid display-6 ${styles.chartHeading} ${
                  visibleTexts[0] ? styles.loaded : ""
                }`}
                ref={(el) => (textRefs.current[0] = el)}
                >
                Meine Skills
              </p>
            </div>
          </div>
      <div className="container d-flex justify-content-center vh-75 align-items-end">
        <div className={styles.verticalBarChartContainer}>
          {/* Beschriftungen links neben den Linien */}
          <div className={`${styles.horizontalLineLabel} ${styles.line1Label}`}>
            Ninja
          </div>
          <div className={`${styles.horizontalLineLabel} ${styles.line2Label}`}>
            Skilled
          </div>
          <div className={`${styles.horizontalLineLabel} ${styles.line3Label}`}>
            Learner
          </div>
          <div className={`${styles.horizontalLineLabel} ${styles.line4Label}`}>
            Newbie
          </div>
          {/* Horizontale Linien */}
          <div className={`${styles.horizontalLine} ${styles.line1}`}></div>
          <div className={`${styles.horizontalLine} ${styles.line2}`}></div>
          <div className={`${styles.horizontalLine} ${styles.line3}`}></div>
          <div className={`${styles.horizontalLine} ${styles.line4}`}></div>
          <div className={`${styles.horizontalLine} ${styles.line5}`}></div>
          {/* Balken mit Icon und Label */}
          <div className={styles.barVertical}>
            <div className={styles.barFill} data-percentage="95"></div>
            <div className={styles.barLabel}>Tee trinken</div>
          </div>
          <div className={styles.barVertical}>
            <div
              className={`${styles.barIcon} ${
                visibleTexts[1] ? styles.loaded : ""
              }`}
              ref={(el) => (iconRefs.current[0] = el)} // Icon-Referenz hinzufügen
            >
              <Image
                src="/images/figmaicon.png"
                alt="Design"
                width={50}
                height={50}
              />
              <Image
                src="/images/bootstrapicon.png"
                alt="Design"
                width={50}
                height={50}
              />
              <Image
                src="/images/sassicon.png"
                alt="Design"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.barFill} data-percentage="85"></div>
            <div className={styles.barLabel}>Design</div>
          </div>
          <div className={styles.barVertical}>
            <div
              className={`${styles.barIcon} ${
                visibleTexts[2] ? styles.loaded : ""
              }`}
              ref={(el) => (iconRefs.current[1] = el)}
            >
              <Image
                src="/images/herojsicon.png"
                alt="Coding"
                width={50}
                height={50}
              />
            </div>
            <div className={styles.barFill} data-percentage="90"></div>
            <div className={styles.barLabel}>Coding</div>
          </div>
          <div className={styles.barVertical}>
            <div
              className={`${styles.barIcon} ${
                visibleTexts[3] ? styles.loaded : ""
              }`}
              ref={(el) => (iconRefs.current[2] = el)} // Icon-Referenz hinzufügen
            >
              <Image
                src="/images/nexticon.png"
                alt="Frameworks"
                width={40}
                height={54.37}
                style={{ width: "auto", height: "54.37px" }}
              />
            </div>
            <div className={styles.barFill} data-percentage="75"></div>
            <div className={styles.barLabel}>Frameworks</div>
          </div>
          <div className={styles.barVertical}>
            <div className={styles.barFill} data-percentage="40"></div>
            <div className={styles.barLabel}>Gym</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalBarChart;
