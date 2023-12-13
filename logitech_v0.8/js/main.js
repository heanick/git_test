// Section01 Animation - Genensis Hero

window.scrollTo(0, 0);

//기준 설정

//screen and (min-width: 1600px)에 해당한다.

ScrollTrigger.saveStyles(".mobile, .desktop");

// 스크롤 부드럽게

class Scrooth {
  constructor({
    element = window,
    strength = 10,
    acceleration = 1.2,
    deceleration = 0.975,
  } = {}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener("wheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.element.addEventListener("mousewheel", this.scrollHandler.bind(this), {
      passive: false,
    });
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *=
        this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false
        ? (this.running = false)
        : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance)
        ? (this.isDistanceAsc = false)
        : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);

      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 25, //스크롤 한번에 이동하는 거리
  acceleration: 1.75,
  deceleration: 0.875,
});

// section 02
ScrollTrigger.matchMedia({
  "(min-width: 1200px)": function () {
    var ani02 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section02", // ScrollTrigger 지점
        start: "top top", // 에니메이션 시작 지점 (트리거 상단 지점이, 화면의 중간 높이 지점일 때)
        end: "bottom top", // 에니메이션 끝 지점 (트리거 하단 지점이, 화면의 Top 지점일 때)
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none", // 기본값 (onEnter, onLeave, OnEnterBack, onLeaveBack)
        // pin: true,   // pin the trigger element while active
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //     snapTo: "labels", // snap to the closest label in the timeline
        //     duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        //     delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //     ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
      },
    });

    // var productElement = document.querySelector(".product");
    // productElement.addEventListener("click", function () {
    //   productElement.classList.add("shake-animation");
    // });

    ani02.fromTo(
      ".product", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.3 } //To 여기까지 값
    );
    ani02.fromTo(
      ".a-stout", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.3 } //To 여기까지 값
    );

    ani02.fromTo(
      ".HEARTED", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.4 } //To 여기까지 값
    );
    ani02.fromTo(
      ".HERO", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.4 } //To 여기까지 값
    );

    ani02.fromTo(
      ".section02-maintext", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.4 } //To 여기까지 값
    );

    ani02.fromTo(
      ".section02-text", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 100, duration: 0.3 } //To 여기까지 값
    );

    ani02.fromTo(
      ".scroll", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, y: 5, duration: 0.5 } //To 여기까지 값
    );

    // section 03

    var ani03 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section03", // ScrollTrigger 지점
        start: "top center",
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    ani03.fromTo(
      ".backtext", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, duration: 0.3 }
    );
    ani03.fromTo(
      ".product03", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -150, y: -300, duration: 0.6 }
    );
    ani03.fromTo(
      ".OPEN", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 10, duration: 0.3 }
    );

    ani03.fromTo(
      ".FOR", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 10, duration: 0.3 }
    );
    ani03.fromTo(
      ".text03", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 10, duration: 0.3 }
    );

    ani03.fromTo(
      ".BUSINESS", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 10, duration: 0.3 }
    );

    ani03.fromTo(
      ".marshall", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 10, duration: 0.3 }
    );

    ani03.fromTo(
      ".side-text03", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: 5, duration: 0.3 }
    );

    // section 04

    var ani04 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section04", // ScrollTrigger 지점
        start: "top center",
        end: "bottom center",
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none",
        ease: "none",
      },
    });

    ani04.fromTo(
      ".section04-text", //클래스값 준  이름
      { opacity: 1 }, //from 여기서부터 값
      { opacity: 1, x: -4100, y: -1000, duration: 8, repeat: -1 }
    );

    // section 05

    var ani05 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section05", // ScrollTrigger 지점
        start: "top center",
        end: "bottom center",
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    ani05.fromTo(
      ".poto01", //클래스값 준  이름
      { opacity: 1 }, //from 여기서부터 값
      { opacity: 1, x: -1200, y: 550, duration: 2 }
    );

    ani05.fromTo(
      ".poto02", //클래스값 준  이름
      { opacity: 1 }, //from 여기서부터 값
      { opacity: 1, x: 1000, y: 300, duration: 2 }
    );

    // section 06

    var ani06 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section06", // ScrollTrigger 지점
        start: "top top",
        end: "bottom center",
        pin: true,
        markers: true, // Scroll Trigger 영역 표시
        scrub: 10,
        toggleActions: "play none restart none",
        ease: "none",
      },
    });

    // ani06.fromTo(
    //   ".singer", //클래스값 준  이름
    //   { opacity: 1 }, //from 여기서부터 값
    //   { opacity: 1, duration: 0.3, rotate: 15, yoyo: true, repeat:-1 }
    // );

    ani06.fromTo(
      ".scroll-img", //클래스값 준  이름
      { opacity: 1, y: 0 }, //from 여기서부터 값
      { opacity: 1, y: -2700, duration: 12 },
      0
    );

    // section07

    var ani07 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section07", // ScrollTrigger 지점
        start: "top center",
        end: "bottom top",
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    ani07.fromTo(
      ".product07_big", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, y: -150, duration: 0.3 }
    );

    ani07.fromTo(
      ".product07", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -100, duration: 0.6 }
    );

    ani07.fromTo(
      ".fantastic", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -100, duration: 0.3 }
    );

    ani07.fromTo(
      ".for", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -100, duration: 0.6 }
    );
    ani07.fromTo(
      ".sound", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -100, duration: 0.6 }
    );
    ani07.fromTo(
      ".speakers ", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -100, y: 10, duration: 0.3 }
    );
    ani07.fromTo(
      ".section07-text", //클래스값 준  이름
      { opacity: 0 }, //from 여기서부터 값
      { opacity: 1, x: -50, duration: 0.3 }
    );

    var ani08 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section08", // ScrollTrigger 지점
        start: "top center",
        end: "bottom top",
        pin: false,
        markers: true, // Scroll Trigger 영역 표시
        scrub: false,
        toggleActions: "play none restart none",
      },
    });

    ani08.fromTo(
      ".section-text08", //클래스값 준  이름
      { opacity: 1 }, //from 여기서부터 값
      { opacity: 1, y: -1000, duration: 4 }
    );
  },
});

// section 08 ~ 10 스크롤
const horizontal = document.querySelector(".horizontal");
const sections = gsap.utils.toArray(".horizontal > section");

// 수정된 부분 시작
const targetSections = [8, 9, 10]; // 애니메이션을 주고 싶은 섹션 번호

gsap.to(sections, {
  // sections에 해당하는 애니메이션을 모두 적용
  xPercent: -100 * (sections.length - 2),
  ease: "none",
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    end: () => "+=" + (horizontal.offsetWidth - innerWidth),
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      inertia: false,
      duration: { min: 0.2, max: 0.1 },
    },
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

targetSections.forEach((sectionIndex) => {
  // 애니메이션을 주고 싶은 섹션들에 대해 개별적으로 설정
  gsap.to(sections[sectionIndex - 1], {
    // sectionIndex는 1부터 시작하므로 인덱스에 -1을 해줍니다.
    // 원하는 애니메이션 설정을 여기에 추가해주세요.
    left: 100,
  });
});
// 수정된 부분 끝
