import { Color, DisplayMode, Engine } from "excalibur";
import { onMount } from "solid-js";

// Managers
// import { GameManager } from "../../engine/core/GameManager";
// import { EventBus } from "../../engine/core/EventBus";
// import { DataManager } from "../../engine/core/DataManager";
// import { AudioManager } from "../../engine/core/AudioManager";
// import { UIManager } from "../../engine/core/UIManager";
// import { LocalizationManager } from "../../engine/core/LocalizationManager";
// import { SettingsManager } from "../../engine/core/SettingsManager";
// import { SaveManager } from "../../engine/core/SaveManager";
// import { PlayerManager } from "../../engine/managers/PlayerManager";
// import { CutsceneManager } from "../../engine/managers/CutsceneManager";
// import { InputManager } from "../../engine/managers/InputManager";
// import { DialogueManager } from "../../engine/managers/DialogueManager";
// import { CameraManager } from "../../engine/managers/CameraManager";
// import { InteractionManager } from "../../engine/managers/InteractionManager";
// import { PartyManager } from "../../engine/managers/PartyManager";
// import { CombatManager } from "../../engine/managers/CombatManager";

// Game Scenes and Loaders
// import { MainMenu, startScreenLoader } from "../../game/scenes/MainMenu";
// import { useGameContext } from "../context/store";

// UI Elements
// import { StartScreen } from "../../app/components/StartScreen";
// import { MainMenuComponent } from "../../app/components/menus/MainMenu";
// import { CutsceneWrapper } from "../../app/components/CutsceneWrapper";
// import { CutsceneDialogueBox } from "../../app/components/DialogueBox";
// import { CombatMenu } from "./menus/combat/CombatMenu";
// import { ActionMenu } from "./menus/combat/ActionMenu";
// import { OpenBook } from "./OpenBook";

export function GameWrapper() {
  //   const [uiReady, setUiReady] = createSignal(false);
  //   const context = useGameContext();

  onMount(() => {
    // start the game with Excalibur.js
    const game = new Engine({
      canvasElementId: "game-canvas",
      backgroundColor: Color.Black,
      pixelArt: true,
      displayMode: DisplayMode.FitContainer,
      resolution: { width: 1280, height: 720 },
      //   scenes: {
      //     start: {
      //       scene: new MainMenu(),
      //       loader: startScreenLoader,
      //     },
      //   },
    });

    // start the game
    game.start().then(async () => {
      //   // initialize all core managers
      //   GameManager.initialize(game, context);
      //   EventBus.initialize();
      //   DataManager.initialize();
      //   LocalizationManager.initialize();
      //   SettingsManager.initialize();
      //   AudioManager.initialize();
      //   SaveManager.initialize();
      //   const isUIReady = UIManager.initialize();
      //   // initialize all game managers
      //   CutsceneManager.initialize(game);
      //   InteractionManager.initialize();
      //   DialogueManager.initialize();
      //   CombatManager.initialize();
      //   InputManager.initialize(game);
      //   CameraManager.initialize(game);
      //   if (isUIReady) {
      //     setUiReady(isUIReady);
      //     PlayerManager.initialize();
      //     const player = PlayerManager.getPlayer();
      //     if (player) {
      //       PartyManager.init([player]);
      //     }
      //   }
      //   GameManager.goToScene("start");
    });
  });

  return (
    <>
      {/* <Show when={uiReady()}>
        <StartScreen />
        <CombatMenu />
        <ActionMenu />
        <MainMenuComponent />
        <CutsceneWrapper />
        <CutsceneDialogueBox />
        <OpenBook />
      </Show> */}
      <h1 class="text-white text-8xl">Yippy!</h1>
      <canvas id="game-canvas"></canvas>
    </>
  );
}
