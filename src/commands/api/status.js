const { SlashCommandBuilder } = require('discord.js');
require('dotenv').config();
let lastAccessPublic
const token = process.env.API_TOKEN;
function getApi() {
  return fetch(`https://cursos.alura.com.br/api/dashboard/${token}`)
    .then(res => res.json())
    .then(data => {
      const opcoes = { timeZone: 'America/Sao_Paulo' };
      const dateNow = new Date().getTime();
      const lastAccess = new Date(data.courseProgresses[0].lastAccessTime).toLocaleString('pt-BR', opcoes)
      lastAccessPublic = lastAccess.toISOString().slice(0, 10).split('-').reverse().join('/');
      lastAccessPublic += ` ${lastAccess.toTimeString().slice(0, 9)}`
      data = Math.floor((Math.abs(dateNow - (lastAccess.getTime()))) / 60000);
      console.log(data, lastAccessPublic);
      return String(data);
    })
    .catch(err => {
      throw err;
    });
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('status')
    .setDescription('Obter o status da conta (ativo ou inativo)'),
  async execute(interaction) {

    try {
      await interaction.deferReply();
      let result = await getApi();
      if (result <= 60) {
        await interaction.editReply(`Ouve alteração na conta na ultima hora  ❌\n Esta é a ultima data de acesso que tenho disponível:\n \`${lastAccessPublic}\``);
      } else {
        await interaction.editReply(`Sem alteração  na ultima hora ✅ \n  Esta é a ultima data de acesso que tenho disponível:\n \`${lastAccessPublic}\``);
      }

    } catch (error) {
      throw error;
    }
  },
};
