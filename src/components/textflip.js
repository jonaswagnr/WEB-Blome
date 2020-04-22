import React from "react";
import anime from "animejs/lib/anime.es.js";

export default class Textflip extends React.Component {
  componentDidMount() {
    var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 1;
    ml4.durationIn = 1200;
    ml4.durationOut = 1200;
    ml4.delay = 700;

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-3",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-4",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-4",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-5",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-5",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 900,
        delay: 900,
      });
  }

  render() {
    return (
      <h1 class="ml4">
        <span class="letters letters-1"><span role="img" aria-label="emoji">🍔</span> Burger?</span>
        <span class="letters letters-2"><span role="img" aria-label="emoji">🍟</span> Pommes?</span>
        <span class="letters letters-3"><span role="img" aria-label="emoji">🥗</span> Salat?</span>
        <span class="letters letters-4"><span role="img" aria-label="emoji">🥘</span> Deftig?</span>
        <span class="letters letters-5"><span role="img" aria-label="emoji">➡️</span> Bestellen!</span>
      </h1>
    );
  }
}
