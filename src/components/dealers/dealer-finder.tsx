"use client";

import { useId, useMemo, useState } from "react";
import type { DealerItem } from "@/content/site-content";

function telephoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

export function DealerFinder({ dealers, limit }: { dealers: readonly DealerItem[]; limit?: number }) {
  const fieldId = useId();
  const [district, setDistrict] = useState("");
  const districts = useMemo(() => Array.from(new Set(dealers.map((dealer) => dealer.district))).sort(), [dealers]);
  const filteredResults = district ? dealers.filter((dealer) => dealer.district === district) : dealers;
  const results = typeof limit === "number" && !district ? filteredResults.slice(0, limit) : filteredResults;

  if (dealers.length === 0) return null;

  return (
    <div className="utility-panel">
      <div className="dealer-toolbar">
        <div className="field">
          <label htmlFor={fieldId}>İlçe / bölge</label>
          <select id={fieldId} value={district} onChange={(event) => setDistrict(event.target.value)}>
            <option value="">Tüm bölgeler</option>
            {districts.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
        <p aria-live="polite">{filteredResults.length} kayıt</p>
      </div>
      <ol className="dealer-results">
        {results.map((dealer) => (
          <li key={dealer.id} className="dealer-result">
            <div>
              <p className="dealer-result__district">{dealer.district}</p>
              <h3>{dealer.name}</h3>
              {dealer.address ? <address>{dealer.address}</address> : null}
              {dealer.workingHours ? <p className="dealer-result__meta">Çalışma saatleri: {dealer.workingHours}</p> : null}
              {dealer.serviceArea ? <p className="dealer-result__meta">Hizmet alanı: {dealer.serviceArea}</p> : null}
            </div>
            <div className="dealer-result__actions">
              {dealer.phone ? <a href={telephoneHref(dealer.phone)}>{dealer.phone}</a> : null}
              {dealer.sourceUrl ? <a href={dealer.sourceUrl} target="_blank" rel="noopener noreferrer">Kaydı Gör ↗</a> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
