import string

def count_specific_word(text: str, search_word: str) -> int:
    if not text or not search_word:
        return 0
    words = text.split()
    count = 0
    i = 0
    while i < len(words):
        cleaned = words[i].strip(string.punctuation).lower()
        if cleaned == search_word.lower():
            count += 1
        i += 1
    return count

def identify_most_common_word(text: str) -> str:
    if not text.strip():
        return None
    words = text.split()
    cleaned_words = []
    for w in words:
        c = w.strip(string.punctuation).lower()
        if c:
            cleaned_words.append(c)
    if not cleaned_words:
        return None
    
    most_common = None
    max_count = 0
    for word in cleaned_words:
        current_count = cleaned_words.count(word)
        if current_count > max_count:
            max_count = current_count
            most_common = word
    return most_common

def calculate_average_word_length(text: str) -> float:
    if not text.strip():
        return 0.0
    words = text.split()
    total_letters = 0
    valid_word_count = 0
    for word in words:
        cleaned = "".join(char for char in word if char not in string.punctuation)
        if cleaned:
            total_letters += len(cleaned)
            valid_word_count += 1
    if valid_word_count == 0:
        return 0.0
    return total_letters / valid_word_count

def count_paragraphs(text: str) -> int:
    if not text.strip():
        return 1
    raw_paragraphs = text.split('\n')
    valid_paras = []
    for p in raw_paragraphs:
        if p.strip():
            valid_paras.append(p)
    return len(valid_paras) if len(valid_paras) > 0 else 1

def count_sentences(text: str) -> int:
    if not text.strip():
        return 1
    sentence_endings = ('.', '!', '?')
    count = 0
    for char in text:
        if char in sentence_endings:
            count += 1
    return count if count > 0 else 1

if __name__ == "__main__":
    sample_article = """
    Python is widely used in data science, web development, and natural language processing! 
    It is clear that Python has become a top-tier tool for tech professionals.

    Learning Python functions enables developers to build clean code efficiently. What will you build next?
    """
    
    target_word = "Python"
    print(count_specific_word(sample_article, target_word))
    print(identify_most_common_word(sample_article))
    print(calculate_average_word_length(sample_article))
    print(count_paragraphs(sample_article))
    print(count_sentences(sample_article))