async function generateTimelineSvg() {
  // Edit these variables
  // Gap between Months
  const gap = 10;
  // Height of the Quarter Bar
  const quarterRowHeight = 85;
  // Height of the Row Bar
  const monthRowHeight = 65;
  // Gap between Quarter and Row Bars
  const gapBetweenRows = 10;
  // Height of the text
  const textHeight = 60;
  // Vertical position of the userDates
  const quarterRowYPosition = 60;
  // Bar radii
  const barRadaii = 12;

  // Follow this pattern - as few or as many as you like. Text can be what you want - like the day number or name
  // The variable verticalPosition is an adjustment on where you want the icon and text to show
  // The size variable is the font size for that event
  const userDates = [
    {
      date: "03-14",
      symbol: "⛩️",
      text: "14",
      verticalPosition: -110,
      size: 44,
    },
    {
      date: "03-18",
      symbol: "🍤",
      text: "18",
      verticalPosition: -186,
      size: 44,
    },
    {
      date: "03-22",
      symbol: "🌸",
      text: "22",
      verticalPosition: -30,
      size: 44,
    },
    {
      date: "03-29",
      symbol: "⛩️",
      text: "29",
      verticalPosition: -110,
      size: 44,
    },
    {
      date: "04-01",
      symbol: "🍤",
      text: "01",
      verticalPosition: -186,
      size: 44,
    },
    {
      date: "04-25",
      symbol: "⛩️",
      text: "25",
      verticalPosition: -110,
      size: 44,
    },
    {
      date: "05-08",
      symbol: "🍤",
      text: "08",
      verticalPosition: -110,
      size: 44,
    },
    {
      date: "06-20",
      symbol: "💍",
      text: "20",
      verticalPosition: -30,
      size: 44,
    },
    {
      date: "11-15",
      symbol: "🎂",
      text: "15",
      verticalPosition: -30,
      size: 44,
    },
    { date: "12-25", symbol: "🎄", text: "", verticalPosition: -30, size: 100 },
  ];

  // Font size of the today date text
  const todayTextSize = 46;
  // Size of the today symbol marker
  const todaySymbolSize = 20;
  // Padding between today marker and text
  const todayPadding = 4;

  // Don't change anything from here unless you know what you are doing

  const year = new Date().getFullYear();

  const isLeapYear = (year) =>
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  const monthColors = [
    "#6AA9FF",
    "#3F85FF",
    "#6AB04A",
    "#B4E051",
    "#F8E352",
    "#FFC30F",
    "#FF7F27",
    "#FF4C3B",
    "#DAA520",
    "#6A5ACD",
    "#483D8B",
    "#5F9EA0",
  ];

  const monthNames = moment.monthsShort();

  const monthRowYPosition =
    quarterRowYPosition + quarterRowHeight + gapBetweenRows;

  const calculateDayOfYear = (dateStr) => {
    const [month, day] = dateStr.split("-").map(Number);
    const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);

    // Adjust for non-leap year if date is Feb 29
    if (!isLeap && month === 2 && day === 29) {
      dateStr = "2-28";
    }

    // Continue with day of year calculation
    const newDate = new Date(`${year}-${dateStr}`);
    const start = new Date(newDate.getFullYear(), 0, 0);
    const diff = newDate - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    return dayOfYear;
  };

  // Unified method to calculate xPosition for any date
  const calculateXPosition = (dateStr) => {
    const dayOfYear = calculateDayOfYear(dateStr);
    const monthIndex = parseInt(dateStr.split("-")[0], 10) - 1; // Convert 'MM' to index
    const xPosition = (dayOfYear - 1) * 10 + monthIndex * gap; // Calculate xPosition with day width and gap
    return xPosition;
  };

  let currentX = 0;
  let monthPositions = [],
    quarterPositions = [],
    quarterWidths = [];

  daysInMonth.forEach((days, index) => {
    monthPositions.push({ x: currentX, width: days * 10 });
    currentX += days * 10 + gap;
    if ((index + 1) % 3 === 0) {
      let quarterWidth =
        daysInMonth
          .slice(index - 2, index + 1)
          .reduce((acc, curr) => acc + curr, 0) *
          10 +
        2 * gap;
      quarterPositions.push({
        x: monthPositions[index - 2].x,
        width: quarterWidth,
      });
    }
  });

  const userDatesPositions = userDates.map((date) => {
    const xPosition = calculateXPosition(date.date);
    const yPosition =
      monthRowYPosition +
      monthRowHeight +
      gapBetweenRows +
      date.verticalPosition;
    return { ...date, x: xPosition, y: yPosition };
  });

  // Define gapCenterYPosition correctly
  const gapCenterYPosition =
    quarterRowYPosition + quarterRowHeight + gapBetweenRows / 2;

  const today = new Date();

  // Use for display
  const todayFormatted = moment(today).format("DD-MMM");

  // Convert 'today' to 'MM-DD' format for calculation purposes
  const todayCalculationFormat = `${today.getMonth() + 1}-${today.getDate()}`;

  // Calculate xPosition using a function compatible with 'MM-DD' format
  const todayXPosition = calculateXPosition(todayCalculationFormat);
  const todayTextXPosition =
    todayXPosition - todaySymbolSize - todayTextSize / 3;
  const todayTextYPosition =
    quarterRowYPosition +
    quarterRowHeight +
    gapBetweenRows / 2 +
    todaySymbolSize -
    10;
  const adjustedTodayTextYPosition = todayTextYPosition + todayTextSize / 14;

  let quarterGradients = quarterPositions
    .map((q, i) => {
      const startMonthIndex = i * 3;
      return `
<linearGradient id="Q${i + 1}Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" style="stop-color:${monthColors[startMonthIndex]}" />
    <stop offset="50%" style="stop-color:${monthColors[startMonthIndex + 1]}" />
    <stop offset="100%" style="stop-color:${monthColors[startMonthIndex + 2]}" />
</linearGradient>
    `;
    })
    .join("");
  let filterDefinition = `
<filter id="brightness" x="0" y="0" width="100%" height="100%">
  <feColorMatrix type="matrix" values="0.4 0 0 0 0
                                       0 0.4 0 0 0
                                       0 0 0.4 0 0
                                       0 0 0 1 0" />
</filter>
<filter id="dropShadow" height="130%">
  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
  <feOffset dx="2" dy="2" result="offsetblur"/>
  <feMerge>
    <feMergeNode in="offsetblur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
  <feMerge>
    <feMergeNode in="blur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
`;
  // Generate the SVG content with dynamic sizing and positioning
  let svgContent = `
<svg viewBox="0 -100 ${currentX + 20} 400" xmlns="http://www.w3.org/2000/svg">
  <title>Dynamic Timeline ${year}</title>
  <defs>
      ${filterDefinition}
      ${quarterGradients}
  </defs>
  <g filter="url(#brightness)">
    ${quarterPositions
      .map(
        (q, i) => `
      <rect x="${q.x}" y="${quarterRowYPosition}" width="${q.width}" height="${quarterRowHeight}" fill="url(#Q${i + 1}Gradient)" rx="${barRadaii}" ry="${barRadaii}" />
      <text x="${q.x + q.width / 2}" y="${quarterRowYPosition - 40}" fill="white" font-size="${textHeight}" text-anchor="middle">Q${i + 1}</text>
    `
      )
      .join("")}
    ${monthPositions
      .map(
        (m, i) => `
      <rect x="${m.x}" y="${monthRowYPosition}" width="${m.width}" height="${monthRowHeight}" fill="${monthColors[i]}" rx="${barRadaii}" ry="${barRadaii}" />
      <text x="${m.x + m.width / 2}" y="${monthRowYPosition + monthRowHeight + 70}" fill="white" font-size="${textHeight}" text-anchor="middle">${monthNames[i]}</text>
    `
      )
      .join("")}
  </g>
  <g>
    ${userDatesPositions
      .map(
        (date) => `
      <text filter="url(#dropShadow)" x="${date.x}" y="${date.y}" fill="white" font-size="${date.size}" text-anchor="middle">${date.symbol}${date.text}</text>
    `
      )
      .join("")}
    <circle filter="url(#dropShadow)" cx="${todayXPosition}" cy="${gapCenterYPosition}" r="${todaySymbolSize}" stroke="white" fill="#FF00FF" stroke-width="5" />
    <!-- I have removed the black rectangle behind today's date -->
    <text filter="url(#dropShadow)" x="${todayTextXPosition}" y="${adjustedTodayTextYPosition}" fill="#FF00FF" font-size="${todayTextSize}" font-weight="bold" text-anchor="end">${todayFormatted}</text>
  </g>
</svg>
`;

  return svgContent;
}

module.exports = generateTimelineSvg;