<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# WalkWithHer🌸

## Basic Details

### Team Name: Sruthi Mariam Shaji's Name

### Team Members
- Member 1:Sruthi Mariam Shaji - TKM College Of Engineering

### Hosted Project Link
https://walk-with-her.vercel.app/

### Project Description

WalkWithHer is a women-focused safety and support web application designed to help women feel safer and more confident while navigating public spaces. It provides quick-access safety features like SOS alerts, location sharing, and preventive tools along with emotional support through a calm and user-friendly interface.

### The Problem Statement

Women often face safety concerns while traveling alone, especially in unfamiliar or public spaces. Existing safety solutions are either too complex, reactive only during emergencies, or lack emotional reassurance, making them difficult to use when it matters most.

### The Solution

WalkWithHer addresses this problem by offering a simple, web-based safety companion that combines emergency response, preventive safety features, and emotional support. With one-tap SOS, live location sharing, virtual accompany mode, fake call simulation, and quick access to nearby help, the platform empowers women to feel safer, supported, and less alone.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- **Languages used:** HTML, CSS, JavaScript  
- **Frameworks used:** None (Vanilla JavaScript)  
- **Libraries used:** None  
- **Tools used:** VS Code, GitHub, Vercel, Browser Developer Tools  

**For Hardware:**
- **Main components:** Not applicable  
- **Specifications:** Not applicable  
- **Tools required:** Not applicable  

---

## Features

- **One-Tap SOS:** Instantly captures the user’s live location and generates a Google Maps link that can be shared via WhatsApp during emergencies.
- **Accompany Mode:** Allows users to share their live walk location so a trusted person can virtually accompany them for added safety and reassurance.
- **Fake Call Simulation:** Simulates an incoming phone call to help users safely exit uncomfortable or potentially unsafe situations.
- **Quick Help Shortcuts:** Provides one-click access to nearby hospitals, pharmacies, police stations, and public washrooms using Google Maps search.
- **Motivational Quote Section:** Displays calming and motivational quotes on the home screen that change periodically to provide emotional support.

---

## Implementation

### For Software:

#### Installation
```bash
No installation required
This is a frontend-only web application
```

### For Hardware:

#### Components Required
Not Applicable

#### Circuit Setup
Not Applicable

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

!HOME SCREEN<img width="1201" height="808" alt="home" src="https://github.com/user-attachments/assets/ef055984-f80b-4688-842f-306a05a6e989" />
*Home screen of WalkWithHer showing the SOS button, motivational quote, and navigation options.*

!SOS<img width="1120" height="686" alt="sos" src="https://github.com/user-attachments/assets/3f84904a-5a5a-4f60-92e3-6b5e44515760" />
*Emergency SOS feature capturing live location and generating a WhatsApp sharing link.*

!QUICKHELP<img width="920" height="726" alt="quickhelp" src="https://github.com/user-attachments/assets/7959a0e5-a304-4054-98e2-23697ba89d21" />
*Quick Help feature providing nearby essential locations using Google Maps.*

!HOSPITAL<img width="1798" height="982" alt="hospital" src="https://github.com/user-attachments/assets/ed5dcb5a-eb15-4cd6-b644-2ce80b9b8bc7" />
*Hospital view under Quick Help


#### Diagrams

**System Architecture:**

*The system follows a client-side web architecture where the frontend is built using HTML, CSS, and JavaScript. User interactions (such as SOS, Fake Call, and Quick Help) are handled through JavaScript functions in the browser. The application uses browser APIs like Geolocation to fetch live location data and integrates with external services such as Google Maps and WhatsApp for navigation and emergency sharing. The app is deployed on Vercel, ensuring secure HTTPS access.*

**Application Workflow:**

*The workflow begins when the user opens the Walk With Her web application. From the home screen, the user can select features such as SOS, Accompany Mode, Quick Help, or Fake Call. When SOS is triggered, the app captures the user’s live location and prepares a shareable message via WhatsApp. Quick Help redirects users to nearby essential services using Google Maps. Fake Call simulates an incoming call to help users exit unsafe situations. All actions are handled in real-time within the browser without requiring backend servers.*

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
https://drive.google.com/file/d/11m4pXV3KbhHfHfnSLwrxTA-D03UQ7156/view?usp=sharing
This video goes through the different features of the WalkWithHer website.

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** Chatgpt

**Purpose:** [What you used it for]
- Assisted in brainstorming and refining the project idea and features
- Helped structure frontend logic using HTML, CSS, and JavaScript
- Provided guidance for debugging UI and JavaScript issues

**Key Prompts Used:**
- "Design a simple women safety web application with SOS and fake call features"
- "Help debug JavaScript issues related to DOM manipulation"
- 
**Percentage of AI-generated code:** [Approximately 80]

**Human Contributions:**
- Overall project idea and problem selection
- UI/UX design decisions and feature prioritization
- Manual coding and integration of HTML, CSS, and JavaScript
- Testing features, fixing bugs, and deployment on Vercel

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Name 1]: [Specific contributions - e.g., Frontend development, API integration, etc.]
- [Name 2]: [Specific contributions - e.g., Backend development, Database design, etc.]
- [Name 3]: [Specific contributions - e.g., UI/UX design, Testing, Documentation, etc.]

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
