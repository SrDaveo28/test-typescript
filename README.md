# Instalar dependencias
- npm install

# Ejecutar
- npm run build
- npm start

# Generación de Datos Aleatorios

- Se generan aleatoriamente las horas de funcionamiento para cada tubo fluorescente, con valores entre 100 y 200 horas.

# Simulación del Uso Diario

- Se simula el uso diario del salón de clases durante 15 horas.
- Se cuenta cuántos tubos se rompen durante ese período.

# Simulación del Uso Semanal

- Se repite la simulación diaria cinco veces para simular una semana completa.
- Se suma el número de tubos rotos en cada día para obtener el total de la semana.

# Simulación del Uso Mensual

- Se repite la simulación semanal cuatro veces para simular un mes completo.
- Se suma el número de tubos rotos en cada semana para obtener el total del mes.

# Simulación del Uso Anual

- Se repite la simulación mensual nueve veces para simular un año completo.
- Se suma el número de tubos rotos en cada mes para obtener el total del año.

# Cálculo del Costo de Reemplazo

- Se calcula el costo total de reemplazar los tubos rotos.
- Cada tubo roto se reemplaza junto con los otros tres tubos de la misma unidad.
- Se multiplica el número total de unidades a reemplazar por el costo de cada unidad (4 tubos por unidad a $7 por tubo) para obtener el costo total de reemplazo.
