import ProfessionalTemplate from "../allTemplates/professionalTemplate/ProfessionalTemplate";
import CreativeTemplate from "../allTemplates/CreativeTemplate/CreativeTemplate";
import BasicTemplate from "../allTemplates/basicTemplate/BasicTemplate";
import photo1 from '../assets/images/professionalTemplate.png';
import photo2 from '../assets/images/creativeTemplate.png';
import photo3 from '../assets/images/basicTemplate.png';

const templateData = [
    {
        id: 1,
        name: 'Professional Template',
        image: photo1,
        component: ProfessionalTemplate
    },
    {
        id: 2,
        name: 'Creative Template',
        image: photo2,
        component: CreativeTemplate
    },
    {
        id: 3,
        name: 'Basic Template',
        image: photo3,
        component: BasicTemplate
    }
];

export default templateData;
