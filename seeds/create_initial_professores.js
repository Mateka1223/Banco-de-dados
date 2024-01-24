/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 */


  const bcrypt = require('bcrypt');
  
exports.seed = async function(knex) {

  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'rua do senac', email:'senac@senac.com', telefone:'(84) 99999999', nascimento:'1945-07-15' },
    {nome: 'rua da cidade', email:'senac@senac.com', telefone:'(84) 99999999', nascimento:'1950-07-15' },
    {nome: 'rua de natal', email:'senac@senac.com', telefone: bcrypt.hashSync('professor', 10), nascimento:'1950-07-15' }
  ]);
};
