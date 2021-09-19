from flask import Blueprint, url_for, flash, g
from werkzeug.utils import redirect

from pybo import db
from pybo.models import Question
from pybo.views.auth_views import login_required

bp = Blueprint("vote", __name__, url_prefix="/vote")


@bp.route("/question/<int:question_id>/")
@login_required
def qeustion(question_id):
    _question = Question.query.get_or_404(question_id)
    if g.user == _question.user:
        flash("본인이 작성한 글은 추천할 수 없습니다.")
    else:
        _question.voter.append(g.user)
        db.session.commit()
    return redirect(url_for("question.default", question_id=question_id))
