import TypeIt from 'typeit-react';

const TypeItComponent = () => {
  return (
    <div className='type-it'>
     <TypeIt
  options={{
    speed: 50,
    lifeLike: true,
    cursor: true,
    cursorSpeed: 300,
    loop: true,
  }}
  getBeforeInit={(instance) => {
    instance
      .type('<h1>> Initializing portfolio...</h1>', { delay: 100 })
      .delete(27, { deleteSpeed: 100 })
      .pause(100)
      .type('<span class="emoji" style="font-size: 1.5em;">👋</span>', { html: true })
      .pause(300)
      .type(`<h1>Hey there! I'm Ridwan Yinus</h1>`)
      .pause(400)
      .delete(13, { deleteSpeed: 90 })
      .type(`<h1>a Front-End Developer</h1>`)
      .pause(500)
      .delete(25, { deleteSpeed: 100 })
      .type(`<h1>Find me at <a href="https://ridwan.is-a.dev">ridwan.is-a.dev</a></h1>`, { html: true })
      .pause(500)
      .move(-15)
      .type('https://')
      .move(null, { to: 'END' })
      .pause(400)
      .go();
    return instance;
  }}
/>
    </div>
  );
};

export default TypeItComponent;
