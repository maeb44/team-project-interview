import { getLimit } from '../../components/limitInput';
import { getPage } from '../../components/pageInput';

export function updateUrl(page: number = getPage(), limit: number = getLimit()) {
  const url = new URL(window.location.href);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  window.history.pushState({}, '', url);
}
