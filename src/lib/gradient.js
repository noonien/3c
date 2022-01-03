export function gradient(perc, alpha, colors) {
    if (perc < 0 || perc > 1 || (perc != 0 && !perc)) return '';
    const i = colors.findIndex((c) => perc <= c.perc) || 1;
    const lower = colors[i - 1];
    const upper = colors[i];
    const pos = (perc - lower.perc) / (upper.perc - lower.perc);
    const percLower = 1 - pos;
    const percUpper = pos;
    const color = {
        r: Math.floor(lower.color.r * percLower + upper.color.r * percUpper),
        g: Math.floor(lower.color.g * percLower + upper.color.g * percUpper),
        b: Math.floor(lower.color.b * percLower + upper.color.b * percUpper)
    };
    return 'rgba(' + [color.r, color.g, color.b, alpha].join(',') + ')';
}
