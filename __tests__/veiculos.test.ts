import { filtrarPorMarca, somarValoresPorMarca, filtrarPorAno } from '../src/veiculos';

test('filtrarPorMarca deve filtrar veículos pelo tipo e marca', () => {
  const carrosToyota = filtrarPorMarca('carro', 'Toyota');
  expect(carrosToyota.every(veiculo => veiculo.tipo === 'carro' && veiculo.marca === 'Toyota')).toBe(true);
});

test('somarValoresPorMarca deve somar os valores dos veículos pela marca', () => {
  const totalToyota = somarValoresPorMarca('Toyota');
  expect(totalToyota).toBeGreaterThan(0); // Verifique o valor esperado com base no JSON
});

test('filtrarPorAno deve filtrar veículos mais novos que o ano informado', () => {
  const veiculosRecentes = filtrarPorAno(2018);
  expect(veiculosRecentes.every(veiculo => veiculo.ano > 2018)).toBe(true);
});
