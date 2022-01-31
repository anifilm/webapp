from django import template

import re

# register는 유효한 tag library를 만들기 위한 모듈 레벨의 인스턴스 객체이다.
register = template.Library()

@register.filter
def add_link(value):
    content = value.content  # 전달된 value 객체의 content 멤버 변수를 가져온다.
    tags = value.tag_set.all()  # model.py tag_set 안에 전달된 value 객체의 tag_set 전체를 가져오는 queryset을 리턴한다.

    for tag in tags:  # tags의 각각의 인스턴스를 순회하며, content 내에서 해당 문자열을 링크를 포함한 문자열로 replace 한다.
        content = re.sub(r'\#'+tag.name+r'\b', '<a href="/post/explore/tags/'+tag.name+'" style="color: #00376B">#'+tag.name+'</a>', content)

    return content
