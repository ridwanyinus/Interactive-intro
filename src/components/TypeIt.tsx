import TypeIt from 'typeit-react';

const TypeItComponent = () => {
  return (
    <div className='type-it'>
      <TypeIt
        options={{
          speed: 75,
          lifeLike: true,
          cursor: true,
          cursorSpeed: 700,
          loop: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .type('<h1>Loading repositories...</h1>', { delay: 100 })
            .delete(25, { deleteSpeed: 70 })
            .type('<h1>> Initializing skills.ts</h1>', { delay: 100 })
            .delete(23, { deleteSpeed: 70 })
            .type('<h1> Rendering projects.json</h1>', { delay: 100 })
            .delete(25, { deleteSpeed: 50 })
            .pause(100)
            .type('<span class="emoji" style="font-size: 1.5em;">👋</span>', { html: true })
            .pause(500)
            .type(`<h1>Hey there! I'm Ridwan Yinus</h1>`)
            .pause(1200)
            .delete(16, { deleteSpeed: 90 })
            .pause(700)
            .type(`<h1>I'm a Front-End Developer</h1>`)
            .pause(1500)
            .delete(25, { deleteSpeed: 70 })
            .pause(500)
            .type(`<h1>You can find me at </h1>`)
            .type(`<a href="https://ridwan.is-a.dev">&nbspridwan.is-a.dev</a>`, { html: true })
            .pause(500)
            .move(-15)
            .type('https://')
            .move(null, { to: 'END' })
            .pause(500)
            .go();
          return instance;
        }}
      />
    </div>
  );
};

export default TypeItComponent;
