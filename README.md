# Drum Pad Machine
A responsive and interactive drum pad machine built with React for the freeCodeCamp Front End Development Libraries certification. Create beats with keyboard keys or mouse clicks using two different sound kits!

## Features
- **9 Interactive Drum Pads**: Arranged in a 3x3 grid for easy access
- **Dual Sound Kits**:
    - Heater Kit (hip-hop style sounds)
    - Smooth Piano Kit (melodic chords and percussion)
- **Keyboard Support**: Play using Q, W, E, A, S, D, Z, X, C keys
- **Mouse Click Support**: Click pads directly for instant playback
- **Power Switch**: Toggle sound on/off while maintaining visual feedback
- **Real-time Display**: Shows current sound name and active kit
- **Visual Feedback**: Pads highlight when activated
- **Responsive Design**: Clean, modern UI with smooth animations

## How to Use

### Keyboard Controls
- **Q**, **W**, **E** (Top row): Various drum sounds/chords
- **A**, **S**, **D** (Middle row): Claps, hi-hats, and percussion
- **Z**, **X**, **C** (Bottom row): Kicks, snares, and bass sounds

### Interface Controls
- **Power Switch**: Turn sound on/off (ON/OFF button)
- **Switch Kit**: Toggle between Heater Kit and Smooth Piano Kit
- **Display**: Shows currently playing sound and active kit

## Technologies Used
- **React** (with Hooks: useState, useEffect, useRef)
- **Tailwind CSS** for styling
- **HTML5 Audio API** for sound playback
- **Vite** for build tooling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/kurogamidesuu/Drum-Pad-Machine-FCC-Project.git
cd Drum-Pad-Machine-FCC-Project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure
```
Drum-Pad-Machine/
├── public/                 # public assets
├── src/
│   ├── assets/             # Static assets
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and Tailwind imports
│   ├── main.jsx            # Application entry point
│   └── Pad.jsx             # Individual drum pad component
├── .gitignore              # Git ignore rules
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package-lock.json       # Dependency lock file
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── vite.config.js          # Vite configuration
```

## Sound Kits

### Heater Kit
- Heater-1, Heater-2, Heater-3
- Heater-4, Clap, Open HH
- Kick n Hat, Kick, Closed HH

### Smooth Piano Kit
- Chord 1, Chord 2, Chord 3
- Shaker, Open HH, Closed HH
- Punchy Kick, Side Stick, Snare

## Key Features Implementation
- **State Management**: Uses React hooks for managing power state, kit selection, and display updates
- **Event Handling**: Supports both keyboard and mouse events
- **Audio Management**: Resets audio currentTime for seamless sound overlapping
- **Visual Feedback**: Active state management with timeout for button press effects
- **Responsive Design**: Tailwind CSS classes for mobile-friendly interface

## Author
### Hempushp Chauhan

- GitHub: [@kurogamidesuu](https://github.com/kurogamidesuu)
- FreeCodeCamp: [@kurogamidesuu](https://www.freecodecamp.org/kurogamidesuu)
- LinkedIN: [Hempushp Chauhan](https://www.linkedin.com/in/hempushp-chauhan-32339926a/)

## License
This project is open source and available under the MIT License.

## Acknowledgments
- [freeCodeCamp](https://freecodecamp.org) for the project inspiration and requirements
- Audio samples provided by freeCodeCamp's CDN
- React and Tailwind CSS communities for excellent documentation