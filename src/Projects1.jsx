import './styles/example.css';

function ProjectsPage1() {

  return (
    <>
    <div class="description blue">
  <div>
    <h1>Side by Side Layered pinning</h1>
    <p>Use pinning to layer panels on top of each other as you scroll.</p>
    <div class="scroll-down">Scroll down<div class="arrow"></div>
    </div>
  </div>
</div>

<div class="sections">
  <div class="container-page">
    <div class="contento one">
      <h2>This is random content</h2>
    </div>
    <div class="contento two">
      <h2>This is another content</h2>
    </div>
    <div class="contento three">
      <h2>This is final content</h2>
    </div>
  </div>
  <div class="panels">
    <section class="panel red">
      ONE
    </section>
    <section class="panel orange">
      TWO
    </section>
    <section class="panel purple">
      THREE
    </section>
    <section class="panel green">
      FOUR
    </section>
  </div>
</div>

<section class="spacer">
  <h1>The End!</h1>
  <h1>Happy Tweening!</h1>
</section>
    </>
  )
}

export default ProjectsPage1;