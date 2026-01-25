import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const siglas = {
  "Acre": "AC",
  "Alagoas": "AL",
  "Amapá": "AP",
  "Amazonas": "AM",
  "Bahia (Projudi)": "BA",
  "Bahia (PJe)": "BA",
  "Ceará": "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  "Goiás": "GO",
  "Maranhão": "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais (PJe)": "MG",
  "Minas Gerais (eProc)": "MG",
  "Minas Gerais": "MG",
  "Pará": "PA",
  "Paraíba": "PB",
  "Paraná": "PR",
  "Pernambuco": "PE",
  "Piauí": "PI",
  "Rio de Janeiro (PJe)": "RJ",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  "Rondônia": "RO",
  "Roraima": "RR",
  "Santa Catarina": "SC",
  "São Paulo (ESAJ)": "SP",
  "São Paulo (eProc)": "SP",
  "Sergipe": "SE",
  "Tocantins": "TO"
};

const sistemas1Grau = [
  { estado: "Acre", url: "https://esaj.tjac.jus.br/esaj/portal.do?servico=740000" },
  { estado: "Alagoas", url: "https://www2.tjal.jus.br/esaj/portal.do" },
  { estado: "Amapá", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjap-1g&redirect_uri=https%3A%2F%2Fpje.tjap.jus.br%2F1g%2Flogin.seam&state=613acaed-f206-48b0-a100-cb045836b2da&login=true&scope=openid" },
  { estado: "Amazonas", url: "https://projudi.tjam.jus.br/projudi/" },
  { estado: "Bahia (Projudi)", url: "https://projudi.tjba.jus.br/projudi/" },
  { estado: "Bahia (PJe)", url: "https://pje.tjba.jus.br/pje/login.seam?loginComCertificado=false" },
  { estado: "Ceará", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjce-1g&redirect_uri=https%3A%2F%2Fpje.tjce.jus.br%2Fpje1grau%2Flogin.seam%3Bjsessionid%3DUBH4boQe7-vQO871cLPHepYUGD1LdDW5QtWZ6iRZ.tjpjp36?loginComCertificado%3Dfalse%26cid%3D119227&state=3fec7fd5-76fb-4f03-8aa9-8180491efd15&login=true&scope=openid" },
  { estado: "Distrito Federal", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjdft-1g&redirect_uri=https%3A%2F%2Fpje.tjdft.jus.br%2Fpje%2Flogin.seam&state=8b571e64-0231-411e-85d0-ceca5cfe62ea&login=true&scope=openid" },
  { estado: "Espírito Santo", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjes-1g-cloud&redirect_uri=https%3A%2F%2Fpje.tjes.jus.br%2Fpje%2Flogin.seam?cid%3D72871&state=05d2b776-abeb-401c-93f1-c69dd811519a&login=true&scope=openid" },
  { estado: "Goiás", url: "https://projudi.tjgo.jus.br/?ref=blog-da-juit" },
  { estado: "Maranhão", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjma-1g&redirect_uri=https%3A%2F%2Fpje.tjma.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3DgYFPJGhaBVX4aNqqcR7tXDcwzXGjm1J9NdnC46uK.pje-web-ss22?cid%3D190208&state=7be7df3a-304c-434c-9252-e44c59dd4bb5&login=true&scope=openid" },
  { estado: "Mato Grosso", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjmt-1g&redirect_uri=https%3A%2F%2Fpje.tjmt.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3DoRWbsamSJx90cJyHpuIBDPDeDkrXHiAgsK-3B-yO.pjev2-vra0007?cid%3D77967&state=0ca4ac96-37e2-4cb0-9b9f-e465bb34d563&login=true&scope=openid" },
  { estado: "Mato Grosso do Sul", url: "https://esaj.tjms.jus.br/sajcas/login?service=https%3A%2F%2Fesaj.tjms.jus.br%2Fesaj%2Fj_spring_cas_security_check" },
  { estado: "Minas Gerais (PJe)", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjmg-1g&redirect_uri=https%3A%2F%2Fpje.tjmg.jus.br%2Fpje%2Flogin.seam?loginComCertificado%3Dfalse%26cid%3D494975&state=4491643c-7dac-477a-93f3-f230b6c9b6d2&login=true&scope=openid" },
  { estado: "Minas Gerais (eProc)", url: "https://eproc1g.tjmg.jus.br/eproc/" },
  { estado: "Pará", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjpa-1g&redirect_uri=https%3A%2F%2Fpje.tjpa.jus.br%2Fpje%2Flogin.seam&state=3f24190e-b88b-4c5e-b6fd-208539a6f277&login=true&scope=openid" },
  { estado: "Paraíba", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjpb-1g&redirect_uri=https%3A%2F%2Fpje.tjpb.jus.br%2Fpje%2Flogin.seam&state=c029cea1-71b2-4e4e-b8ed-93b218385d57&login=true&scope=openid" },
  { estado: "Paraná", url: "https://projudi.tjpr.jus.br/projudi/" },
  { estado: "Pernambuco", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjpe-1g-cloud&redirect_uri=https%3A%2F%2Fpje.cloud.tjpe.jus.br%2F1g%2Flogin.seam%3Bjsessionid%3DJ2hE23u6iWlT8v3UDVUlwlA50o_p2OF9bs9GsrPY.pje-1g-3?cid%3D75952&state=4622a00a-246c-4d59-9a07-8d1fb282fb38&login=true&scope=openid" },
  { estado: "Piauí", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjpi-1g-new&redirect_uri=https%3A%2F%2Fpje.tjpi.jus.br%2F1g%2Flogin.seam%3Bjsessionid%3D_SXX-EqIc9jWtlckilfyqP3d9XjFIz7eMKBZC4HF.pje-legacy-6864cb6bf5-x64ph?cid%3D175952&state=4e78c05a-f8f1-443f-a762-ef9a707b860c&login=true&scope=openid" },
  { estado: "Rio de Janeiro (PJe)", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjrj-1g&redirect_uri=https%3A%2F%2Ftjrj.pje.jus.br%2F1g%2Flogin.seam%3Bjsessionid%3DDKfDGnlAUHh_JyKFoPbDBcY6JbP-9gxG9kNyXD67.pje-legacy-bb4889cbd-qb8t?cid%3D54500&state=18ef9963-1049-4b9f-8f47-703e2da05208&login=true&scope=openid" },
  { estado: "Rio Grande do Norte", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjrn-1g&redirect_uri=https%3A%2F%2Fpje1g.tjrn.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3DjW-9ueGet4qmNW8_TbMEn7J3MQlf55N3aZqldueA.pje1g-154-z9zdw?cid%3D86766&state=b9d938b0-f491-4159-bffb-710ff978f86c&login=true&scope=openid" },
  { estado: "Rio Grande do Sul", url: "https://keycloak-eks.tjrs.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=Nntx7KOtcR0jDmbcaHtcEYpG4TCmPLTP1TAMeYH0tQ.CSDTRVNZrqs.eproc-tjrs-1g&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftjrs%2Fendpoint&eproc_client_id=eproc-tjrs-1g&nonce=rjaGq0DUT0hL3_9-e14vGw" },
  { estado: "Rondônia", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjro-1g&redirect_uri=https%3A%2F%2Fpjepg.tjro.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3Dc7nT_Qyskp250Auog8eb06E2CPEczwWe0TbGN3KT.pjepg6?cid%3D46751&state=13179ef7-c3cb-420e-8f91-aa12f713fe39&login=true&scope=openid" },
  { estado: "Roraima", url: "https://projudi.tjrr.jus.br/projudi/" },
  { estado: "Santa Catarina", url: "https://sso.tjsc.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=b7Qihm-WkUrL0_Q1PnfcURcjQ2HoTufTRCdZQU2kZOI.VNpqH3obpcE.eproc-tjsc-1g&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftjsc%2Fendpoint&eproc_client_id=eproc-tjsc-1g&nonce=KHhsORUvChu2V5qQLpiUMA" },
  { estado: "São Paulo (ESAJ)", url: "https://esaj.tjsp.jus.br/esaj/?servico=740000" },
  { estado: "São Paulo (eProc)", url: "https://sso.tjsp.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=sS24JnZVaUn-vi9NDHL7pY8-Uw3Bv_U6ykeD0tNJpao.OkrpyUfz49Q.eproc-tjsp-1g&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftjsp%2Fendpoint&eproc_client_id=eproc1g.tjsp.jus.br&nonce=Un4KtcHj7P-98n5fJbjkEg" },
  { estado: "Sergipe", url: "https://www.tjse.jus.br/portaldoadvogado/" },
  { estado: "Tocantins", url: "https://eproc1.tjto.jus.br/eprocV2_prod_1grau/" }
];

const sistemas2Grau = [
  { estado: "Minas Gerais", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-tjmg-2g&redirect_uri=https%3A%2F%2Fpjerecursal.tjmg.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3DKAOCi5_c6o6nFvUx1dWIwXf8tuo2Pk7niAE_TSc1.pjerecursal-poapp03.intra.tjmg.gov.br?cid%3D50801&state=aa9a942b-8070-4043-9b13-bcaa20675e9b&login=true&scope=openid" },
  { estado: "Rio de Janeiro", url: "https://www3.tjrj.jus.br/idserverjus-front/" }
];

const sistemasJusticaFederal = [
  { estado: "Paraná", url: "https://eproc-sso.trf4.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=Ixam86x-DrH0kbeUwwP-mZ-nWyiCgEy_h0g0_foEMI.EJyNNdkYL40.eproc.jfpr.jus.br&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftrf4%2Fendpoint&eproc_client_id=eproc.jfpr.jus.br&nonce=z-VNuXQAcGgYHx4DxtnZXg" },
  { estado: "Rio de Janeiro", url: "https://eproc.jfrj.jus.br/eproc/externo_controlador.php?acao=principal&sigla_orgao_sistema=TRF2&sigla_sistema=Eproc&msg=Sua%20sess%E3o%20foi%20encerrada.%20Por%20favor,%20inicie%20uma%20nova%20sess%E3o." },
  { estado: "Rio Grande do Sul", url: "https://eproc.jfrs.jus.br/eprocV2/externo_controlador.php?acao=principal&sigla_orgao_sistema=TRF4&sigla_sistema=Eproc&msg=Sua%20sess%E3o%20foi%20encerrada.%20Por%20favor,%20inicie%20uma%20nova%20sess%E3o." },
  { estado: "Santa Catarina", url: "https://eproc-sso.trf4.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=y3S7g3rShvCXYtYE0kAFGyZlfj_Lm3UB3qStK1PQNLc.Mk15mgPeAHk.eproc.jfsc.jus.br&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftrf4%2Fendpoint&eproc_client_id=eproc.jfsc.jus.br&nonce=_Z7O2FFGCvm82FldcfRP_g" }
];

const sistemasTRF = [
  { nome: "TRF 1", url: "https://pje1g.trf1.jus.br/pje/login.seam" },
  { nome: "TRF 2", url: "https://eproc.trf2.jus.br/eproc/" },
  { nome: "TRF 3", url: "https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/auth?response_type=code&client_id=pje-trf3-1g&redirect_uri=https%3A%2F%2Fpje1g.trf3.jus.br%2Fpje%2Flogin.seam%3Bjsessionid%3DUypjfcG_vEX4OM5rgxev852f_yF0fbGN90oXslLP.svlpje1g14?cid%3D16073&state=4c3efd67-97f0-4db4-ba42-26cfc64a56b1&login=true&scope=openid" },
  { nome: "TRF 4", url: "https://eproc-sso.trf4.jus.br/realms/eproc/protocol/openid-connect/auth?scope=openid&state=juZPpElHO1v4qtm206-4-hFrounnEaZVU_tKGeCQsVU.XL88MSJjOsg.eproc.trf4.jus.br&response_type=code&client_id=cnj.jus.br&redirect_uri=https%3A%2F%2Fsso.cloud.pje.jus.br%2Fauth%2Frealms%2Fpje%2Fbroker%2Ftrf4%2Fendpoint&eproc_client_id=eproc.trf4.jus.br&nonce=6ucKWDa54gbJ_GvWT2gRAQ" },
  { nome: "TRF 6", url: "https://eproc1g.trf6.jus.br/eproc/externo_controlador.php?acao=principal&msg=N%E3o%20foi%20localizado%20CPF%20a%20partir%20do%20certificado" }
];

const sistemasTRT = [
  { nome: "TRT 8", url: "https://pje.trt8.jus.br/primeirograu/login.seam" },
  { nome: "TRT 9", url: "https://pje.trt9.jus.br/primeirograu/login.seam" },
  { nome: "TRT 12", url: "https://pje.trt12.jus.br/primeirograu/login.seam" },
  { nome: "TRT 15", url: "https://pje.trt15.jus.br/primeirograu/login.seam" }
];

function SectionCard({ title, sistemas, usaNome = false }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-200 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-700 px-8 py-5">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sistemas.map((sistema, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 rounded-xl border-2 border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-teal-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-md text-xs">
                  {usaNome ? sistema.nome.substring(0, 5) : siglas[sistema.estado] || sistema.estado.substring(0, 2).toUpperCase()}
                </div>
                <span className="font-semibold text-gray-900 text-base">
                  {usaNome ? sistema.nome : sistema.estado}
                </span>
              </div>
              
              <Button
                asChild
                className="bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white shadow-md hover:shadow-xl transition-all"
              >
                <a
                  href={sistema.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Acessar</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SistemasProcessuaisTable() {
  return (
    <div className="space-y-8">
      <SectionCard title="📍 1º Grau - Estadual" sistemas={sistemas1Grau} />
      <SectionCard title="⚖️ 2º Grau Juizados" sistemas={sistemas2Grau} />
      <SectionCard title="🏛️ Justiça Federal" sistemas={sistemasJusticaFederal} />
      <SectionCard title="🏢 TRF - Tribunais Regionais Federais" sistemas={sistemasTRF} usaNome={true} />
      <SectionCard title="👔 TRT - Tribunais Regionais do Trabalho" sistemas={sistemasTRT} usaNome={true} />
      
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl px-8 py-5 border-2 border-teal-200">
        <p className="text-sm text-gray-700 text-center">
          💡 <strong>Dica:</strong> Os links abrem em uma nova aba do navegador para facilitar sua navegação
        </p>
      </div>
    </div>
  );
}