import * as fs from 'fs';

interface Veiculo {
  tipo: string;
  marca: string;
  valor: number;
  ano: number;
}

const veiculos: Veiculo[] = JSON.parse(fs.readFileSync('veiculos.json', 'utf-8'));

export function filtrarPorMarca(tipo: string, marca: string): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.tipo === tipo && veiculo.marca === marca);
}

export function somarValoresPorMarca(marca: string): number {
  return veiculos
    .filter(veiculo => veiculo.marca === marca)
    .reduce((total, veiculo) => total + veiculo.valor, 0);
}

export function filtrarPorAno(ano: number): Veiculo[] {
  return veiculos.filter(veiculo => veiculo.ano > ano);
}
