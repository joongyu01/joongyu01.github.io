'use strict';
const Q = window.STUDY_DATA;
const chapter = window.STUDY_CHAPTER || 1;
const key = `joongyu-study-net-ch${chapter}-v1`;
const $ = s => document.querySelector(s);
const esc = v => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let answers = {}, storageOK = true;
try { const saved=JSON.parse(localStorage.getItem(key)||'{}'); if(saved && typeof saved==='object') for(const q of Q) if(Number.isInteger(saved[q.id]) && saved[q.id]>=0 && saved[q.id]<4) answers[q.id]=saved[q.id]; } catch { storageOK=false; }
let filter='core', view='quiz', current=1, visible=Q.filter(q=>!q.extra);
const hasAnswer = q => Number.isInteger(answers[q.id]);
const isCorrect = q => hasAnswer(q) && q.options[answers[q.id]].correct;
function save(){try{localStorage.setItem(key,JSON.stringify(answers));}catch{storageOK=false;}updateProgress();}
function updateProgress(){
 const core=Q.filter(q=>!q.extra), solved=core.filter(hasAnswer).length, correct=core.filter(isCorrect).length;
 $('.progress-number>span').textContent=`/ ${core.length}`; $('#progress-label').textContent=`기본 학습 ${core.length}문항 중 풀이 완료`;
 $('[data-filter=core]').textContent=`기본 ${core.length}`;
 $('#solved-count').textContent=solved; $('#correct-count').textContent=correct; $('#wrong-count').textContent=solved-correct;
 $('#progress-fill').style.width=`${solved/core.length*100}%`;
 $('#save-status').textContent=storageOK?'이 브라우저에 자동 저장 · 기기 간 동기화 없음':'브라우저 저장 불가 · 이번 화면에서만 기록 유지';
}
function filterQuestions(){
 const term=$('#search').value.trim().toLowerCase();
 visible=Q.filter(q=>filter==='extra'?q.extra:filter==='wrong'?!q.extra&&hasAnswer(q)&&!isCorrect(q):!q.extra)
   .filter(q=>!term || (/^\d+$/.test(term)?q.id===Number(term):`${q.title} ${q.concept} ${q.prompt} ${q.steps.join(' ')}`.toLowerCase().includes(term)));
 if(!visible.some(q=>q.id===current)) current=visible[0]?.id||null;
 renderNav(); renderQuiz(); renderRead();
}
function renderNav(){
 $('#list-count').textContent=`${visible.length}문항`;
 $('#question-nav').innerHTML=visible.map(q=>`<button class="number ${q.id===current?'current':''} ${hasAnswer(q)?isCorrect(q)?'done':'wrong':''}" data-id="${q.id}" aria-label="${q.id}번 ${esc(q.title)}${hasAnswer(q)?isCorrect(q)?', 정답':', 복습 필요':''}" ${q.id===current?'aria-current="true"':''} title="${esc(q.title)}">${String(q.id).padStart(2,'0')}${hasAnswer(q)?`<span class="status-mark" aria-hidden="true">${isCorrect(q)?'✓':'·'}</span>`:''}</button>`).join('');
}
function lesson(q, includeConcept=true){return `${includeConcept?`<section class="lesson-block"><h3><span>01</span>개념부터 다시</h3><p>${esc(q.concept)}</p></section>`:''}<section class="lesson-block"><h3><span>02</span>${q.evidence?'풀이 순서':'교재 주제의 풀이 순서'}</h3><ol class="steps">${q.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></section><section class="lesson-block"><h3><span>03</span>서술형 답안 예시</h3><p class="model-answer">${esc(q.model)}</p></section><div class="remember"><strong>한 문장으로 기억하기</strong>${esc(q.remember)}</div>${q.evidence?`<p class="evidence">학습 근거: ${esc(q.evidence)}</p>`:''}`;}
function feedback(q){
 const i=answers[q.id], chosen=q.options[i], right=q.options.find(o=>o.correct), rightIndex=q.options.findIndex(o=>o.correct);
 return `<div class="feedback ${chosen.correct?'':'is-wrong'}" role="status" aria-live="polite"><div class="feedback-top"><span class="result-icon" aria-hidden="true">${chosen.correct?'✓':'!'}</span><h3>${chosen.correct?'맞았어요. 이유도 확인해 볼까요?':'이 부분을 다시 이해하면 돼요.'}</h3></div>${!chosen.correct?`<div class="reason-block wrong-reason"><strong>내가 고른 ${'ABCD'[i]} · 왜 틀렸을까?</strong><p>${esc(chosen.why)}</p></div>`:''}<div class="reason-block"><strong>정답 ${'ABCD'[rightIndex]} · 왜 맞을까?</strong><p>${esc(right.why)}</p></div>${lesson(q)}<details class="alternative-reasons"><summary>다른 선택지는 왜 틀렸을까?</summary>${q.options.map((o,j)=>o.correct?'':`<div class="alternative"><b>${'ABCD'[j]}. ${esc(o.text)}</b><p>${esc(o.why)}</p></div>`).join('')}</details></div>`;
}
function renderQuiz(){
 const q=Q.find(q=>q.id===current);
 if(!q||!visible.length){$('#quiz').innerHTML=`<div class="empty"><h2>${filter==='wrong'?'복습할 오답이 없어요':'찾는 문항이 없어요'}</h2><p>${filter==='wrong'?'문제를 풀다가 틀린 항목이 생기면 여기에 모여요.':'검색어 또는 학습 범위를 바꿔 보세요.'}</p><button data-action="core">기본 학습으로</button></div>`;return;}
 const answered=hasAnswer(q), index=visible.findIndex(x=>x.id===q.id);
 $('#quiz').innerHTML=`<article class="question-card" id="current-question"><div class="question-meta"><div class="pills"><span class="pill blue">${q.evidence?'복습':'교재'} ${String(q.id).padStart(2,'0')}번${q.evidence?'':' 주제'}</span><span class="pill">${q.level}</span>${q.extra?'<span class="pill orange">참고 실습</span>':''}</div><span>자체 개념 확인 문제</span></div><h2>${esc(q.title)}</h2><p class="prompt">${esc(q.prompt)}</p>${!answered?`<details class="concept-before"><summary>처음 보는 내용이라면, 개념부터 보기</summary><p>${esc(q.concept)}</p></details>`:''}<div class="answers" role="group" aria-label="정답 선택">${q.options.map((o,i)=>`<button class="option ${answered&&answers[q.id]===i?'selected':''}" data-choice="${i}" ${answered?'disabled':''}><span class="letter">${'ABCD'[i]}</span><span class="option-text">${esc(o.text)}${answered&&answers[q.id]===i?'<span class="option-tag">선택한 답</span>':''}</span></button>`).join('')}</div>${answered?`<details class="solution"><summary><span class="show-solution">해설 보기</span><span class="hide-solution">해설 접기</span></summary>${feedback(q)}</details>`:'<p class="answer-hint">답을 고른 뒤 해설 보기를 누르면 정답과 풀이를 확인할 수 있어요.</p>'}<div class="question-footer"><a href="${q.source}" target="_blank" rel="noopener">${q.evidence?'강의 핵심정리':'교재 원문 · 공식 미리보기'} ↗</a>${answered?'<button data-action="retry">이 문제 다시 풀기 ↻</button>':`<span>${q.evidence?'강의 기반 자체 문제':'1장 연습문제 대응'}</span>`}</div></article><div class="navigation"><button data-action="prev" ${index===0?'disabled':''}>← 이전</button><span>${index+1} / ${visible.length}</span><button class="next" data-action="next" ${index===visible.length-1?'disabled':''}>다음 →</button></div>`;
}
function renderRead(){
 $('#read-list').innerHTML=visible.length?visible.map(q=>`<details class="read-item" id="read-${q.id}"><summary><span class="read-no">${String(q.id).padStart(2,'0')}</span>${esc(q.title)}</summary>${lesson(q)}<a class="source-link" href="${q.source}" target="_blank" rel="noopener">${q.evidence?'강의 핵심정리':'교재 원문 · 공식 미리보기'} ↗</a></details>`).join(''):'<div class="empty"><h2>표시할 문항이 없어요</h2><p>검색어와 학습 범위를 확인해 주세요.</p></div>';
}
function scrollQuestion(){ $('#quiz').scrollIntoView({behavior:'instant',block:'start'}); }
function setView(next){
 view=next;
 document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-selected',String(b.dataset.view===view)));
 $('#study-layout').hidden=view==='cram';$('#quiz-view').hidden=view!=='quiz';$('#read-view').hidden=view!=='read';$('#cram-view').hidden=view!=='cram';
}
function setFilter(next){filter=next;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b.dataset.filter===filter);b.setAttribute('aria-pressed',String(b.dataset.filter===filter));});filterQuestions();}
$('#quiz').addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;const q=Q.find(q=>q.id===current);
 if(b.dataset.choice!==undefined&&q&&!hasAnswer(q)){answers[q.id]=Number(b.dataset.choice);save();renderNav();renderQuiz();return;}
 const action=b.dataset.action;
 if(action==='core'){$('#search').value='';setFilter('core');}
 if(action==='retry'&&q){delete answers[q.id];save();renderNav();renderQuiz();scrollQuestion();}
 if(action==='next'||action==='prev'){const i=visible.findIndex(q=>q.id===current)+(action==='next'?1:-1);if(visible[i]){current=visible[i].id;renderNav();renderQuiz();scrollQuestion();}}
});
$('#question-nav').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;current=Number(b.dataset.id);renderNav();if(view==='read'){const d=$(`#read-${current}`);d.open=true;d.scrollIntoView({behavior:'instant',block:'start'});}else{setView('quiz');renderQuiz();scrollQuestion();}});
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
$('#search').addEventListener('input',filterQuestions);
$('#extra-shortcut')?.addEventListener('click',()=>{$('#search').value='';setFilter('extra');setView('quiz');$('#workspace').scrollIntoView({behavior:'instant'});});
$('#reset').addEventListener('click',()=>{if(!confirm(`이 브라우저의 ${chapter}장 풀이 기록을 모두 지울까요?`))return;answers={};save();filterQuestions();});
// Support keyboard tab navigation without forcing focus changes on answer selection.
$('.view-tabs').addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;const tabs=[...document.querySelectorAll('[data-view]')],i=tabs.indexOf(document.activeElement);if(i<0)return;e.preventDefault();const j=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[j].focus();setView(tabs[j].dataset.view);});
updateProgress();filterQuestions();
