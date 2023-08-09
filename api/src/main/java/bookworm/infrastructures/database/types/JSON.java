package bookworm.infrastructures.database.types;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.fasterxml.jackson.core.JsonProcessingException;

import bookworm.utils.Common;


public class JSON<T> extends BaseTypeHandler<T> {

    private final Class<T> type;

    @Override
    public void setNonNullParameter(PreparedStatement preparedStatement, int i, Object o, JdbcType jdbcType) throws SQLException {

    }

    public JSON(Class<T> type) {
        if (type == null) {
            throw new IllegalArgumentException("Type argument cannot be null");
        };

        this.type = type;
    }

    @Override
    public T getNullableResult(ResultSet resultSet, String column) throws SQLException {
        try {
            return Common.mapper.readValue(resultSet.getString(column), this.type);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public T getNullableResult(ResultSet resultSet, int i) throws SQLException {
        return null;
    }

    @Override
    public T getNullableResult(CallableStatement callableStatement, int i) throws SQLException {
        return null;
    }
}
