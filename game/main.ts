import { Actor, DisplayMode, Engine, Input, Loader, ImageSource } from "excalibur";
import swordImage from './assets/sword.png';

const game = new Engine({
    displayMode: DisplayMode.FillScreen,
    pointerScope: Input.PointerScope.Canvas
});

const sword = new ImageSource(swordImage);
const loader = new Loader([sword]);

game.start(loader).then(() => {
    game.input.pointers.primary.on('move', event => {
        const delta =  event.worldPos.sub(actor.pos);
        actor.vel = delta;
        // Original asset is at a 45 degree angle need to adjust
        actor.rotation = delta.toAngle() + Math.PI/4;
    });

    const actor = new Actor({
        x: game.halfDrawWidth,
        y: game.halfDrawHeight,
        width: 40,
        height: 40
    });
    actor.graphics.use(sword.toSprite());

    game.add(actor);
});