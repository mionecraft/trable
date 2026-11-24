// 파일 정리 도우미 — 기본 규칙과 맞추기(위에서부터 먼저 맞는 규칙으로 보냄)
// 폴더 이름은 구글 드라이브 「도서관 업무」 폴더 구조에 맞춤
var DEFAULT_RULES = [
  { folder: "도우미 프로그램", keys: ["도우미", "매크로", "진행판", "3서점비교"] },
  { folder: "바로대출", keys: ["바로대출"] },
  { folder: "청구기호 검수", keys: ["청구기호", "마크검수"] },
  { folder: "정기도서", keys: ["정기도서", "정기"] },
  { folder: "국외서·특수도서", keys: ["국외서", "영어도서", "다문화", "원서 및", "큰글자", "점자", "특수도서"] },
  { folder: "장서통계·자료정리", keys: ["장서통계", "장서 현황", "정리내역", "도서정리"] },
  { folder: "도서원부·등록번호", keys: ["도서원부", "등록번호 관리"] },
  { folder: "지역서점", keys: ["지역서점", "동네서점", "서점", "북큐레이션", "간담회", "납품평가", "운영평가", "수의계약"] },
  { folder: "예산", keys: ["예산", "집행", "지출결의", "품의", "설명자료"] },
  { folder: "수시도서", keys: ["수시", "희망도서", "발주목록", "원부", "등록번호", "선정검토", "미입고", "띠지", "인계목록", "선정제외", "미소장"] }
];

// 띄어쓰기·밑줄·대소문자 차이는 무시하고 비교 (맥의 한글 자모 분리도 합쳐서 비교)
function normName(s) {
  s = String(s || "");
  if (s.normalize) s = s.normalize("NFC");
  return s.replace(/[\s_　]/g, "").toLowerCase();
}

function findFolder(name, rules) {
  var n = normName(name);
  for (var i = 0; i < rules.length; i++) {
    var ks = rules[i].keys || [];
    for (var j = 0; j < ks.length; j++) {
      var k = normName(ks[j]);
      if (k && n.indexOf(k) >= 0) return { folder: rules[i].folder, key: ks[j] };
    }
  }
  return null;
}

if (typeof module !== "undefined") module.exports = { DEFAULT_RULES: DEFAULT_RULES, normName: normName, findFolder: findFolder };
