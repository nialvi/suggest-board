const PREFIX = 'SuggestPreview/';

export const VOTE_SUGGEST = `${PREFIX}VOTE_SUGGEST`;

export const TYPE = {
    POSITIVE: 'positive',
    NEGATIVE: 'negative'
}

export const voteSuggest = (typeVote) => ({
    type: VOTE_SUGGEST,
    payload: typeVote
});