select 
  date as day,
	COUNT(CASE WHEN score > 0 THEN score ELSE null END) as num_pos_scores,
	COUNT(CASE WHEN score < 0 THEN score ELSE null END) as num_neg_scores
from assessments
WHERE date BETWEEN '2011-03-01' AND '2011-04-30'
group by date