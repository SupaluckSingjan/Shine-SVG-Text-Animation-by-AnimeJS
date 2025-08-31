const { animate, svg, stagger } = anime;

animate(svg.createDrawable('.line'), {
  draw: ['0 0', '0 1', '1 1'],
  ease: 'inOutQuad',
  duration: 6000,
  delay: stagger(500),
  loop: true
});
