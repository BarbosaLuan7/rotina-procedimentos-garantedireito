import { lazy } from 'react';

// Layout (não lazy - sempre necessário)
import __Layout from './Layout.jsx';

// Páginas com lazy loading
// Home (carrega junto para primeira impressão rápida)
const Home = lazy(() => import('./pages/Home'));

// Páginas de Atendimento
const MensagensPadroes = lazy(() => import('./pages/MensagensPadroes'));
const ChecklistPerguntas = lazy(() => import('./pages/ChecklistPerguntas'));
const ScriptLigacao = lazy(() => import('./pages/ScriptLigacao'));

// Páginas de Ferramentas
const Astrea = lazy(() => import('./pages/Astrea'));
const Conversapp = lazy(() => import('./pages/Conversapp'));
const GoogleDrive = lazy(() => import('./pages/GoogleDrive'));
const Formatacao = lazy(() => import('./pages/Formatacao'));

// Páginas de Fluxo Administrativo
const FluxoCaptacao = lazy(() => import('./pages/FluxoCaptacao'));
const FluxoAnalise = lazy(() => import('./pages/FluxoAnalise'));
const FluxoAdministrativo = lazy(() => import('./pages/FluxoAdministrativo'));
const FluxoJudicial = lazy(() => import('./pages/FluxoJudicial'));

// Páginas de Benefícios
const BpcLoas = lazy(() => import('./pages/BpcLoas'));
const AuxilioIncapacidade = lazy(() => import('./pages/AuxilioIncapacidade'));
const AuxilioAcidente = lazy(() => import('./pages/AuxilioAcidente'));
const AposentadoriaIdade = lazy(() => import('./pages/AposentadoriaIdade'));
const AposentadoriaTempo = lazy(() => import('./pages/AposentadoriaTempo'));
const AposentadoriaInvalidez = lazy(() => import('./pages/AposentadoriaInvalidez'));
const PensaoMorte = lazy(() => import('./pages/PensaoMorte'));
const SalarioMaternidade = lazy(() => import('./pages/SalarioMaternidade'));

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
