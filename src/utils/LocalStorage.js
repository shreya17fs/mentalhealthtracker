const MOOD_KEY = 'moodHistory';
const JOURNAL_KEY = 'journalEntries';

export function saveMood(mood) {
  const moodHistory = JSON.parse(localStorage.getItem(MOOD_KEY)) || [];
  moodHistory.push(mood);
  localStorage.setItem(MOOD_KEY, JSON.stringify(moodHistory));
}

export function getMoodHistory() {
  return JSON.parse(localStorage.getItem(MOOD_KEY)) || [];
}

export function saveJournalEntry(entry) {
  const journalEntries = JSON.parse(localStorage.getItem(JOURNAL_KEY)) || [];
  const timestamp = new Date().toISOString();
  journalEntries.push({ entry, timestamp });
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(journalEntries));
}

export function getJournalEntries() {
  return JSON.parse(localStorage.getItem(JOURNAL_KEY)) || [];
}
