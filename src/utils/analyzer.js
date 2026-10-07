/**
 * SAS Career Gap Analyzer & What-If Simulation Engine
 * Grounded in the 17,443 verified job postings from SAS Hackathon Datasets
 */

export function calcGap(role, userSkills = []) {
  if (!role) {
    return {
      score: 0,
      tier: "—",
      tierColor: "#64748b",
      matched: [],
      missing: [],
      bonus: [],
      missingBonus: [],
      weeks: 0,
      liftINR: "—",
      liftUSD: "—",
      total: 0,
      filled: 0
    };
  }

  const norm = new Set(userSkills.map(s => s.toLowerCase().trim()));
  const match = s => {
    const lo = s.toLowerCase();
    for (const u of norm) {
      if (lo === u || lo.includes(u) || u.includes(lo)) return true;
    }
    return false;
  };

  const must = role.mustHave || [];
  const nice = role.niceToHave || [];
  const matched = must.filter(match);
  const missing = must.filter(s => !match(s));
  const bonus = nice.filter(match);
  const missingBonus = nice.filter(s => !match(s));

  const mustR = must.length ? matched.length / must.length : 1;
  const niceR = nice.length ? bonus.length / nice.length : 1;
  const score = Math.min(100, Math.max(0, Math.round(mustR * 75 + niceR * 25)));

  let tier = "Exploring Foundations", tierColor = "#fb7185";
  if (score >= 85) {
    tier = "Executive Ready";
    tierColor = "#10b981";
  } else if (score >= 65) {
    tier = "Competitive Candidate";
    tierColor = "#6366f1";
  } else if (score >= 40) {
    tier = "Core In Progress";
    tierColor = "#f59e0b";
  }

  const weeks = Math.max(2, Math.ceil(missing.length * 2.0 + missingBonus.length * 1.0));
  
  // Real salary uplift calculation tied to role's avg salary and missing skills
  const baseAvg = role.avgSalaryLPA || 12.0;
  const potentialUpliftLPA = Math.min(
    Math.round(baseAvg * 0.45 * 10) / 10,
    Math.round((missing.length * 1.4 + missingBonus.length * 0.7) * 10) / 10
  );

  return {
    score,
    tier,
    tierColor,
    matched,
    missing,
    bonus,
    missingBonus,
    total: must.length + nice.length,
    filled: matched.length + bonus.length,
    weeks,
    liftINR: `+₹${potentialUpliftLPA}L`,
    liftUSD: `+$${Math.round(potentialUpliftLPA * 1.2)}k`
  };
}

export function whatIf(role, current = [], prospect = []) {
  const base = calcGap(role, current);
  const next = calcGap(role, [...new Set([...current, ...prospect])]);
  const delta = next.score - base.score;
  const openingsBase = role?.openingsCount || 9051;
  const jobs = Math.max(0, Math.round(((next.score - base.score) / 100) * openingsBase));
  return {
    base,
    next,
    delta,
    jobs,
    weeksSaved: Math.max(0, base.weeks - next.weeks)
  };
}
