"""empty message

Revision ID: 67c1fb7bc613
Revises: a4b9ba7f3140
Create Date: 2024-05-31 16:37:06.243461

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '67c1fb7bc613'
down_revision = 'a4b9ba7f3140'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('owners', schema=None) as batch_op:
        batch_op.add_column(sa.Column('phone', sa.BigInteger(), nullable=True))

    with op.batch_alter_table('sitters', schema=None) as batch_op:
        batch_op.add_column(sa.Column('phone', sa.BigInteger(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sitters', schema=None) as batch_op:
        batch_op.drop_column('phone')

    with op.batch_alter_table('owners', schema=None) as batch_op:
        batch_op.drop_column('phone')

    # ### end Alembic commands ###
