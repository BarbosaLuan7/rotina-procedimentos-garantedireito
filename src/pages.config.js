// Páginas de Atendimento
import MensagensPadroes from './pages/MensagensPadroes';
import ChecklistPerguntas from './pages/ChecklistPerguntas';
import ScriptLigacao from './pages/ScriptLigacao';

// Páginas de Ferramentas
import Astrea from './pages/Astrea';
import Conversapp from './pages/Conversapp';
import GoogleDrive from './pages/GoogleDrive';
import Formatacao from './pages/Formatacao';

// Páginas de Fluxo Administrativo
import FluxoCaptacao from './pages/FluxoCaptacao';
import FluxoAnalise from './pages/FluxoAnalise';
import FluxoAdministrativo from './pages/FluxoAdministrativo';
import FluxoJudicial from './pages/FluxoJudicial';

// Páginas de Benefícios
import BpcLoas from './pages/BpcLoas';
import AuxilioIncapacidade from './pages/AuxilioIncapacidade';
import AuxilioAcidente from './pages/AuxilioAcidente';
import AposentadoriaIdade from './pages/AposentadoriaIdade';
import AposentadoriaTempo from './pages/AposentadoriaTempo';
import AposentadoriaInvalidez from './pages/AposentadoriaInvalidez';
import PensaoMorte from './pages/PensaoMorte';
import SalarioMaternidade from './pages/SalarioMaternidade';

// Home e Layout
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    // Home
    "Home": Home,

    // Atendimento
    "MensagensPadroes": MensagensPadroes,
    "ChecklistPerguntas": ChecklistPerguntas,
    "ScriptLigacao": ScriptLigacao,

    // Ferramentas
    "Astrea": Astrea,
    "Conversapp": Conversapp,
    "GoogleDrive": GoogleDrive,
    "Formatacao": Formatacao,

    // Fluxo Administrativo
    "FluxoCaptacao": FluxoCaptacao,
    "FluxoAnalise": FluxoAnalise,
    "FluxoAdministrativo": FluxoAdministrativo,
    "FluxoJudicial": FluxoJudicial,

    // Benefícios
    "BpcLoas": BpcLoas,
    "AuxilioIncapacidade": AuxilioIncapacidade,
    "AuxilioAcidente": AuxilioAcidente,
    "AposentadoriaIdade": AposentadoriaIdade,
    "AposentadoriaTempo": AposentadoriaTempo,
    "AposentadoriaInvalidez": AposentadoriaInvalidez,
    "PensaoMorte": PensaoMorte,
    "SalarioMaternidade": SalarioMaternidade,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
