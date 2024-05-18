// Images ------------------------
import chessImage from './Assets/chess.png';
import synergyImage from './Assets/synergy.png'
import algorithmImage from './Assets/algorithm.png'
import portfolioImage from './Assets/portfolio.png'

const Data = [
    {
        id: "1",
        title: "Synergy",
        content: "It is a Project-Managment Android Application, where users would be able to create and participate in projects. Tools like Boards, Calendar, Chatroom and Meetings (Which would be shown in the video demo below) are also included in the Application.My team and I competed in International Hilti 2024 IT Competition. Even though we didn't win, I learnt a lot about Android Development and improved my teamwork and communication skills.",
        type: "app",
        type_display: "Android Application",
        image: synergyImage,
        language: ["Java"],
        framework: ["Cloud Firestore", "Firebase"],
        organization: "School Project / Competition",
        created_date: "Feb 15 2024",
        updated_date: "Feb 15 2024",
        team: ["Jayden", "Zi Yang"],
        demo: "https://www.youtube.com/watch?v=DlkXfvmWOBE",
        code: "",
    },
    {
        id: "2",
        title: "Algorithm Showcase",
        content: "This website provides a unique educational experience by showcasing various algorithms in action. It slows down the code execution, allowing users to visually follow and understand each step of the algorithm. This visualization helps make complex processes easier to understand.This website is build with HTML, CSS and Javascript and Javascript Timer is used to slow down the code. It is deployed using Netlify and Github, and the demo can be found below.Each algorithm showcase is made after thoroughly understanding them and figuring out the best way to showcase them.",
        type: "algo",
        type_display: "Machine Learning",
        image: algorithmImage,
        language: ["HTML","CSS","Javascript"],
        framework: [],
        organization: "Personal Project",
        created_date: "May 17 2024",
        updated_date: "May 17 2024",
        team: [],
        demo: "https://jiancong-algorithm.netlify.app/",
        code: "https://github.com/Pozq100/Algorithm",
    },
    {
        id: "3",
        title: "Personal Portfolio",
        content: "This website contains my projects.",
        type: "web",
        type_display: "Web Application",
        image: portfolioImage,
        language: ["HTML","CSS","Javascript"],
        framework: ["React"],
        organization: "Personal Project",
        created_date: "May 18 2024",
        updated_date: "May 18 2024",
        team: [],
        demo: "https://chenjiancongportfolio.netlify.app/",
        code: "https://github.com/Pozq100/Portfolio",
    },
]

export default Data;